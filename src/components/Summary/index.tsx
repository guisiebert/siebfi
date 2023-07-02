import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { PriceFormatter } from "../../utils/formatter";

export function Summary() {

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

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>
                    {PriceFormatter.format(summary.income)}
                </strong>
            </SummaryCard>
            
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>
                    {PriceFormatter.format(summary.expenses)}
                </strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Entradas</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>
                    {PriceFormatter.format(summary.total)}
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )

}