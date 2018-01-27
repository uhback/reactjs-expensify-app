import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'rent', amount: 109500 }));
//store.dispatch(setTextFilter('water'));

// 3 seconds later we can see the bill expenses
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)


// getVisibleExpenses -> print visibles ones to screen
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));