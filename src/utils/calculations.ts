import type { Subscription } from '../types';

export const formatCurrency = (amount: number): string => {
    return `S/ ${amount.toFixed(2)}`;
};

export const calculateTotalMonthly = (subscriptions: Subscription[]): number => {
    return subscriptions.reduce((acc, sub) => {
        if (sub.status === 'cancelled') return acc;
        if (sub.frequency === 'monthly') return acc + sub.price;
        return acc + (sub.price / 12);
    }, 0);
};

// yearly estimate is just monthly * 12
export const calculateYearlyEstimate = (monthlyTotal: number): number => {
    return monthlyTotal * 12;
};
