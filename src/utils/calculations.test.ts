import { describe, it, expect } from 'vitest';
import { calculateTotalMonthly } from './calculations';
import type { Subscription } from '../types';

describe('calculateTotalMonthly', () => {
    it('should return 0 for empty list', () => {
        expect(calculateTotalMonthly([])).toBe(0);
    });

    it('should sum monthly subscriptions correctly', () => {
        const subs = [
            { price: 10, frequency: 'monthly', status: 'active' },
            { price: 20, frequency: 'monthly', status: 'active' }
        ] as Subscription[];
        expect(calculateTotalMonthly(subs)).toBe(30);
    });

    it('should convert yearly subscriptions to monthly', () => {
        const subs = [
            { price: 120, frequency: 'yearly', status: 'active' } // 10/month
        ] as Subscription[];
        expect(calculateTotalMonthly(subs)).toBe(10);
    });

    it('should ignore cancelled subscriptions', () => {
        const subs = [
            { price: 10, frequency: 'monthly', status: 'cancelled' },
            { price: 5, frequency: 'monthly', status: 'active' }
        ] as Subscription[];
        expect(calculateTotalMonthly(subs)).toBe(5);
    });

    it('should handle mixed frequencies', () => {
        const subs = [
            { price: 10, frequency: 'monthly', status: 'active' },
            { price: 120, frequency: 'yearly', status: 'active' } // 10/mo
        ] as Subscription[];
        expect(calculateTotalMonthly(subs)).toBe(20);
    });
});
