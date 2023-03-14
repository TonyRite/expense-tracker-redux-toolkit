import { useSelector } from 'react-redux';

interface Transaction {
  id: number;
  amount: number;
  text: string;
}
export const Balance = () => {
   const transactions = useSelector((state: { transactions: Transaction[] }) => state.transactions);
  const amounts= transactions.map(transaction => transaction.amount);
  const total= amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}