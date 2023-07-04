import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: "income" | "expense";
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: () => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider( {children}: TransactionProviderProps ) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        
        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionContext.Provider 
        value={{ 
            transactions,
            fetchTransactions 
        }}>
            {children}
        </TransactionContext.Provider>
    )
}