import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeContainer, TransatctionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>

            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionTypeContainer>
                        <TransatctionTypeButton value="income" variant="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransatctionTypeButton>

                        <TransatctionTypeButton value="expense" variant="expense">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransatctionTypeButton>
                    </TransactionTypeContainer>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>

        </Dialog.Portal>
    )

}