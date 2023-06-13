import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="SiebFi Logo" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton> Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )

    // e aí matheus
}


