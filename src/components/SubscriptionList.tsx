import React from 'react';
import type { Subscription } from '../types';
import { Edit2, Trash2, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/calculations';

interface SubscriptionListProps {
    subscriptions: Subscription[];
    onDelete: (id: string) => void;
    onEdit: (sub: Subscription) => void;
}

export const SubscriptionList: React.FC<SubscriptionListProps> = ({ subscriptions, onDelete, onEdit }) => {
    if (subscriptions.length === 0) {
        return (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px' }}>
                <h2>No se encontraron suscripciones</h2>
                <p>Agrega tu primera suscripción para comenzar.</p>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ borderBottom: '1px solid var(--bg-primary)' }}>
                    <tr style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                        <th style={{ padding: '20px' }}>Nombre</th>
                        <th style={{ padding: '20px' }}>Categoría</th>
                        <th style={{ padding: '20px' }}>Precio</th>
                        <th style={{ padding: '20px' }}>Facturación</th>
                        <th style={{ padding: '20px', textAlign: 'right' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub) => (
                        <tr key={sub.id} style={{ borderBottom: '1px solid var(--bg-tertiary)' }}>
                            <td style={{ padding: '20px', fontWeight: '500' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Placeholder Icon */}
                                    <div style={{
                                        width: '32px', height: '32px',
                                        background: 'linear-gradient(135deg, #FF9C65, #FF5C00)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '12px', fontWeight: 'bold'
                                    }}>
                                        {sub.name.charAt(0)}
                                    </div>
                                    {sub.name}
                                </div>
                            </td>
                            <td style={{ padding: '20px' }}>
                                <span style={{
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    background: 'rgba(108, 93, 211, 0.1)',
                                    color: 'var(--primary)'
                                }}>
                                    {sub.category}
                                </span>
                            </td>
                            <td style={{ padding: '20px' }}>
                                {formatCurrency(sub.price)} <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>/ {sub.frequency === 'monthly' ? 'mensual' : 'anual'}</span>
                            </td>
                            <td style={{ padding: '20px', color: 'var(--text-muted)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Calendar size={14} />
                                    {new Date(sub.startDate).toLocaleDateString()}
                                </div>
                            </td>
                            <td style={{ padding: '20px', textAlign: 'right' }}>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={() => onEdit(sub)}
                                        style={{ padding: '8px', color: 'var(--text-muted)' }}
                                        title="Editar"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(sub.id)}
                                        style={{ padding: '8px', color: 'var(--danger)' }}
                                        title="Eliminar"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
