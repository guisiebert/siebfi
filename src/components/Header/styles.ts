import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px; // sempre que a tela for menor que isso, width será 100%
    margin: 0 auto; // para centralizar
    padding: 0 1.5rem; // padding lateral pro conteúdo não ficar grudado

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const NewTransactionButton = styled.button`

    /* PADDING OU HEIGHT/WIDTH? */
    height: 50px;
    padding: 0 1.25rem;
    /* width: auto; */

    color: white;
    background-color: ${props => props.theme['green-500']};
    border: none;
    border-radius: 6px;
    font-weight: bold;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
        
        background: ${props => props.theme["green-700"]};


    }

`


