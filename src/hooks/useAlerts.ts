import { useMemo } from 'react';
import type { Subscription } from '../types';

export const useAlerts = (subscriptions: Subscription[]) => {
    return useMemo(() => {
        const alerts: { type: 'warning' | 'info', message: string }[] = [];
        const today = new Date();
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);

        // Duplicates
        const seenNames = new Set<string>();
        subscriptions.forEach(sub => {
            const normalized = sub.name.toLowerCase().trim();
            if (seenNames.has(normalized)) {
                alerts.push({ type: 'warning', message: `Posible duplicado encontrado: "${sub.name}"` });
            }
            seenNames.add(normalized);
        });

        // Upcoming Charges (Simple approximation)
        subscriptions.forEach(sub => {
            // Calculate next billing date
            const start = new Date(sub.startDate);
            let nextBilling = new Date(start);

            while (nextBilling < today) {
                if (sub.frequency === 'monthly') {
                    nextBilling.setMonth(nextBilling.getMonth() + 1);
                } else {
                    nextBilling.setFullYear(nextBilling.getFullYear() + 1);
                }
            }

            const diffTime = nextBilling.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 30 && diffDays >= 0) {
                alerts.push({
                    type: 'info',
                    message: `Revisión: ${sub.name} vence en ${diffDays} días (S/ ${sub.price})`
                });
            }
        });

        return alerts;
    }, [subscriptions]);
};
