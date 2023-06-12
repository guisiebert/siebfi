import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer, SearchInput } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Buscar transação" />
            <button type="submit">
                <MagnifyingGlass size={20}/>
                <strong>Buscar</strong>
            </button>
        </SearchFormContainer>
    )
}

