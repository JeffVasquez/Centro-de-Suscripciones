import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Subscription } from '../types';
import { calculateTotalMonthly } from '../utils/calculations';

interface SubscriptionContextType {
    subscriptions: Subscription[];
    addSubscription: (sub: Omit<Subscription, 'id' | 'status'>) => void;
    removeSubscription: (id: string) => void;
    updateSubscription: (id: string, updates: Partial<Subscription>) => void;
    totalMonthlyCost: number;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

const STORAGE_KEY = 'subs_manager_data';

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
    }, [subscriptions]);

    const addSubscription = (sub: Omit<Subscription, 'id' | 'status'>) => {
        const newSub: Subscription = {
            ...sub,
            id: crypto.randomUUID(),
            status: 'active',
        };
        setSubscriptions(prev => [...prev, newSub]);
    };

    const removeSubscription = (id: string) => {
        setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    };

    const updateSubscription = (id: string, updates: Partial<Subscription>) => {
        setSubscriptions(prev => prev.map(sub => sub.id === id ? { ...sub, ...updates } : sub));
    };

    const totalMonthlyCost = calculateTotalMonthly(subscriptions);

    return (
        <SubscriptionContext.Provider value={{ subscriptions, addSubscription, removeSubscription, updateSubscription, totalMonthlyCost }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export const useSubscriptions = () => {
    const context = useContext(SubscriptionContext);
    if (context === undefined) {
        throw new Error('useSubscriptions must be used within a SubscriptionProvider');
    }
    return context;
};
