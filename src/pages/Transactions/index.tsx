import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {SearchForm} from './components/SearchForm'

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { DateFormatter, PriceFormatter } from "../../utils/formatter";


export function Transactions() {

    const { transactions } = useContext(TransactionContext)


    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            console.log(transaction)
                            return (
                                <tr key={transaction.id}>
                                    <td width='50%'> {transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                        {transaction.type === "expense" && "- "}
                                        {PriceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{DateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}