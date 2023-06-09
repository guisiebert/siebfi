import styled from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px; // sempre que a tela for menor que isso, width será 100%
    margin: 0 auto; // para centralizar
    padding: 0 1.5rem; // padding lateral pro conteúdo não ficar grudado

    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin-top: -5rem;
`