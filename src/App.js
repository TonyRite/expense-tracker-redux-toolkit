import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
     <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </Provider>
  );
}

export default App;