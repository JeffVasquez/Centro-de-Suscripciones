import React from 'react';
import { LayoutGrid, List, PlusCircle } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    activeTab: 'dashboard' | 'list';
    onTabChange: (tab: 'dashboard' | 'list') => void;
    onOpenAddModal: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, onOpenAddModal }) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                backgroundColor: 'var(--bg-primary)',
                borderRight: '1px solid var(--bg-secondary)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', color: 'var(--text-main)' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px' }}></div>
                    <h1 style={{ fontSize: '20px', fontWeight: '600' }}>SubManager</h1>
                </div>

                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>
                            <button
                                onClick={() => onTabChange('dashboard')}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    backgroundColor: activeTab === 'dashboard' ? 'var(--bg-secondary)' : 'transparent',
                                    color: activeTab === 'dashboard' ? 'var(--text-main)' : 'var(--text-muted)',
                                    fontWeight: activeTab === 'dashboard' ? '500' : '400',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <LayoutGrid size={20} />
                                Panel Principal
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onTabChange('list')}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    backgroundColor: activeTab === 'list' ? 'var(--bg-secondary)' : 'transparent',
                                    color: activeTab === 'list' ? 'var(--text-main)' : 'var(--text-muted)',
                                    fontWeight: activeTab === 'list' ? '500' : '400',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <List size={20} />
                                Suscripciones
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={onOpenAddModal}
                    style={{
                        marginTop: 'auto',
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '14px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(108, 93, 211, 0.3)'
                    }}
                >
                    <PlusCircle size={20} />
                    Nueva Suscripción
                </button>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
};
