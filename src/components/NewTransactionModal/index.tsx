import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeContainer, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'expense'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionContext)

    const { 
        control,
        register, 
        handleSubmit, 
        formState: { isSubmitting },
        reset, 
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    })


    async function handleCreateNewTransaction(data : NewTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransaction({
            description,
            price,
            category,
            type
        })
        
        reset();
    }


    return (
        <Dialog.Portal>

            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form
                    onSubmit={handleSubmit(handleCreateNewTransaction)}
                >
                    <input 
                        type="text" 
                        placeholder="Description" 
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder="Value" 
                        required
                        {...register("price", { valueAsNumber: true })}
                    />

                    <input 
                        type="text" 
                        placeholder="Category" 
                        required
                        {...register("category")} 
                    />

                    <Controller 
                        control={control}
                        name="type"
                        render={({ field }) => {

                            return (
                                <TransactionTypeContainer 
                                    onValueChange={field.onChange} 
                                    value={field.value}
                                >
                                    <TransactionTypeButton value="income" variant="income">
                                        <ArrowCircleUp size={24}/>
                                        Income
                                    </TransactionTypeButton>
            
                                    <TransactionTypeButton value="expense" variant="expense">
                                        <ArrowCircleDown size={24}/>
                                        Expense
                                    </TransactionTypeButton>
                                </TransactionTypeContainer>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </form>
            </Content>

        </Dialog.Portal>
    )

}