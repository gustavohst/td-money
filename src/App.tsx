import { Dashboard } from "./componentes/Dashbord";
import Modal from 'react-modal'

import { Header } from "./componentes/Header";
import { useState } from "react";
import { NewTransactionModal } from "./componentes/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}