import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px; // sempre que a tela for menor que isso, width será 100%
    margin: 0 auto; // para centralizar
    padding: 0 1.5rem; // padding lateral pro conteúdo não ficar grudado

    display: grid;
    /* grid-template-columns: repeat(3, 1fr); MESMA FORMA DE DIZER O ABAIXO */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin-top: -5rem;
`

interface SummaryCardProps {
    variant?: 'green' | 'red' | 'grey'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    
    /* &:last-child {
        background: ${props => props.theme['green-700']};
    } */

    header {
        display: flex;
        justify-content: space-between;

        color: ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        transition: 0.1s;
    }

    ${props => props.variant === 'green' && css`
        background-color: ${props => props.theme['green-700']};
    ` }
    

    &:hover {
        strong {
            color: white;

        }
    }

    

`