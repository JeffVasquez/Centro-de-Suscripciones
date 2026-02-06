import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Subscription, Frequency } from '../types';
import { CATEGORIES } from '../types';

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Omit<Subscription, 'id' | 'status'>) => void;
    initialData?: Subscription | null;
}

export const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [frequency, setFrequency] = useState<Frequency>('monthly');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setPrice(initialData.price.toString());
            setFrequency(initialData.frequency);
            setCategory(initialData.category as any);
            setStartDate(initialData.startDate);
        } else {
            // Reset
            setName('');
            setPrice('');
            setFrequency('monthly');
            setCategory(CATEGORIES[0]);
            setStartDate(new Date().toISOString().split('T')[0]);
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            name,
            price: Number(price),
            currency: 'PEN',
            frequency,
            category,
            startDate
        });
        onClose();
    };

    return (
        <div style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: 'var(--bg-secondary)',
                padding: '32px',
                borderRadius: '24px',
                width: '400px',
                maxWidth: '90%',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid var(--bg-tertiary)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '20px' }}>{initialData ? 'Editar Suscripción' : 'Nueva Suscripción'}</h2>
                    <button onClick={onClose}><X size={24} color="var(--text-muted)" /></button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Nombre</label>
                        <input
                            required
                            style={{ width: '100%' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="ej. Netflix"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Precio (S/)</label>
                            <input
                                required
                                type="number"
                                step="0.01"
                                style={{ width: '100%' }}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Frecuencia</label>
                            <select
                                style={{ width: '100%' }}
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value as Frequency)}
                            >
                                <option value="monthly">Mensual</option>
                                <option value="yearly">Anual</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Categoría</label>
                        <select
                            style={{ width: '100%' }}
                            value={category}
                            onChange={(e) => setCategory(e.target.value as any)}
                        >
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>Fecha de Inicio / Facturación</label>
                        <input
                            required
                            type="date"
                            style={{ width: '100%' }}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            marginTop: '16px',
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '12px',
                            fontWeight: '600'
                        }}
                    >
                        {initialData ? 'Guardar Cambios' : 'Agregar Suscripción'}
                    </button>
                </form>
            </div>
        </div>
    );
};
