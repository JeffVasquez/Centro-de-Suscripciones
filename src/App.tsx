import React, { useState } from 'react';
import { SubscriptionProvider, useSubscriptions } from './store/SubscriptionContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { SubscriptionList } from './components/SubscriptionList';
import { FormModal } from './components/FormModal';
import type { Subscription } from './types';

const AppContent: React.FC = () => {
  const { subscriptions, addSubscription, updateSubscription, removeSubscription } = useSubscriptions();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'list'>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSub, setEditingSub] = useState<Subscription | null>(null);

  const handleOpenAdd = () => {
    setEditingSub(null);
    setIsModalOpen(true);
  };

  const handleEdit = (sub: Subscription) => {
    setEditingSub(sub);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: Omit<Subscription, 'id' | 'status'>) => {
    if (editingSub) {
      updateSubscription(editingSub.id, data);
    } else {
      addSubscription(data);
    }
  };

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onOpenAddModal={handleOpenAdd}
    >
      {activeTab === 'dashboard' ? (
        <Dashboard />
      ) : (
        <SubscriptionList
          subscriptions={subscriptions}
          onDelete={removeSubscription}
          onEdit={handleEdit}
        />
      )}

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingSub}
      />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <SubscriptionProvider>
      <AppContent />
    </SubscriptionProvider>
  );
};

export default App;
