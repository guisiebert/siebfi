import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"


export function useSummary() {
    
    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "income") {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.expenses += transaction.price
                acc.total -= transaction.price
            }

            return acc
        }, {
            income: 0,
            expenses: 0,
            total: 0
        }
    )

    return summary

}
