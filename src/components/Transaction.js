import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactionsSlice';


export default function Transaction({transaction}) {
    const dispatch = useDispatch();
    const sign = transaction.amount < 0 ? '-' : '+';

    const handleDeleteTransaction = ()=>{
      dispatch(deleteTransaction(transaction.id));
    }
  return (
    <div>
      <li className={transaction.amount<0?'minus':'plus'}>
           {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button 
           onClick={handleDeleteTransaction} className="delete-btn">x</button>
         </li>
    </div>
  )
}