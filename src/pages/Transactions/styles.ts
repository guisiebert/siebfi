import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px; // sempre que a tela for menor que isso, width será 100%
    margin: 4rem auto 0; // lateral com auto para centralizar
    padding: 0 1.5rem; // padding lateral pro conteúdo não ficar grudado
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate; // é o que separa as celulas e permite o border-spacing
    border-spacing: 0 0.5rem; // espaçamento vertical entre células
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

`

interface PriceHighlightProps {
    variant: 'income' | 'expense'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant == "income" 
    ? props.theme['green-300'] 
    : props.theme['red-300']};
`

