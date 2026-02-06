export type Currency = 'PEN';
export type Frequency = 'monthly' | 'yearly';
export type SubscriptionStatus = 'active' | 'cancelled';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: Currency;
  frequency: Frequency;
  category: string;
  startDate: string; // ISO Date string YYYY-MM-DD
  image?: string; // Optional logo URL
  status: SubscriptionStatus;
}

export const CATEGORIES = [
  'Entretenimiento',
  'Software',
  'Servicios',
  'Salud',
  'Otros'
] as const;

export type Category = typeof CATEGORIES[number];
