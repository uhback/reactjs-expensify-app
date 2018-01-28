import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { firebase } from './firebase/firebase';

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

let hasRendered = false;
// render single time
const renderApp = () => {
    if (!hasRendered) {
        console.log(hasRendered);
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// redirecting
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
           renderApp();
           if (history.location.pathname === '/') {
               history.push('/dashboard');
           }
        })        
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})