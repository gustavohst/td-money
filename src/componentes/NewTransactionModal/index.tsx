import Modal from 'react-modal'

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionsModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    );
}