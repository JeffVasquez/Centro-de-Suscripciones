import React from 'react';
import { useSubscriptions } from '../store/SubscriptionContext';
import { TrendingUp, AlertCircle, CreditCard } from 'lucide-react';
import { AlertsSection } from './AlertsSection';
import { formatCurrency } from '../utils/calculations';

export const Dashboard: React.FC = () => {
    const { subscriptions, totalMonthlyCost } = useSubscriptions();

    const yearlyEstimate = totalMonthlyCost * 12;

    // Group by category
    const categoryCosts = subscriptions.reduce((acc, sub) => {
        const monthlyPrice = sub.frequency === 'monthly' ? sub.price : sub.price / 12;
        acc[sub.category] = (acc[sub.category] || 0) + monthlyPrice;
        return acc;
    }, {} as Record<string, number>);

    const maxCategoryCost = Math.max(...Object.values(categoryCosts), 1); // Avoid div by 0

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <AlertsSection subscriptions={subscriptions} />
            {/* Top Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Costo Mensual</span>
                        <div style={{ padding: '8px', background: 'rgba(63, 140, 255, 0.1)', borderRadius: '50%', color: '#3F8CFF' }}>
                            <CreditCard size={20} />
                        </div>
                    </div>
                    <h2 style={{ fontSize: '32px' }}>{formatCurrency(totalMonthlyCost)}</h2>
                    <span style={{ color: '#3F8CFF', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                        <TrendingUp size={14} /> +0% vs mes anterior
                    </span>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Estimado Anual</span>
                        <div style={{ padding: '8px', background: 'rgba(255, 117, 76, 0.1)', borderRadius: '50%', color: '#FF754C' }}>
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <h2 style={{ fontSize: '32px' }}>{formatCurrency(yearlyEstimate)}</h2>
                    <span style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px', display: 'block' }}>
                        Comprometido anualmente
                    </span>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Suscripciones Activas</span>
                        <div style={{ padding: '8px', background: 'rgba(108, 93, 211, 0.1)', borderRadius: '50%', color: '#6C5DD3' }}>
                            <AlertCircle size={20} />
                        </div>
                    </div>
                    <h2 style={{ fontSize: '32px' }}>{subscriptions.length}</h2>
                    <span style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px', display: 'block' }}>
                        {subscriptions.filter(s => s.frequency === 'yearly').length} suscripciones anuales
                    </span>
                </div>
            </div>

            {/* Chart Section */}
            <div style={{ background: 'var(--bg-secondary)', padding: '32px', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Gasto por Categoría</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(categoryCosts).map(([cat, cost]) => (
                        <div key={cat}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                                <span>{cat}</span>
                                <span>{formatCurrency(cost)} / mes</span>
                            </div>
                            <div style={{ height: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{
                                    height: '100%',
                                    width: `${(cost / maxCategoryCost) * 100}%`,
                                    background: 'var(--primary)',
                                    borderRadius: '4px',
                                    transition: 'width 1s ease-out'
                                }}></div>
                            </div>
                        </div>
                    ))}
                    {Object.keys(categoryCosts).length === 0 && <p style={{ color: 'var(--text-muted)' }}>No hay datos para mostrar</p>}
                </div>
            </div>
        </div>
    );
};
