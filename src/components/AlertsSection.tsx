import React from 'react';
import { useAlerts } from '../hooks/useAlerts';
import type { Subscription } from '../types';
import { Bell, AlertTriangle } from 'lucide-react';

export const AlertsSection: React.FC<{ subscriptions: Subscription[] }> = ({ subscriptions }) => {
    const alerts = useAlerts(subscriptions);

    if (alerts.length === 0) return null;

    return (
        <div style={{ background: 'rgba(255, 117, 76, 0.1)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255, 117, 76, 0.2)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FF754C' }}>
                <Bell size={18} /> Alertas y Estadísticas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {alerts.map((alert, idx) => (
                    <div key={idx} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        fontSize: '14px',
                        color: alert.type === 'warning' ? '#FF754C' : 'var(--text-main)',
                        background: 'var(--bg-primary)',
                        padding: '12px',
                        borderRadius: '12px'
                    }}>
                        {alert.type === 'warning' ? <AlertTriangle size={16} /> : <Bell size={16} />}
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
    );
};
