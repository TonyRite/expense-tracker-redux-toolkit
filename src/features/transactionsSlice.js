import { createSlice } from "@reduxjs/toolkit";
const initialState = [
        { id: 1, text: 'Love', amount: 2000 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]


const transactionsSlice = createSlice({
    name:'transactions',
    initialState,
    reducers:{
        deleteTransaction: (state, action) => {
           return state.filter(transaction => transaction.id !== action.payload)
            // state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload)
        },
        addTransaction: (state, action) => {
            // state.transactions.unshift(action.payload)
            //  return [action.payload,...state];
             state.unshift(action.payload);
            
        }  
    }
});

export const { deleteTransaction, addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;