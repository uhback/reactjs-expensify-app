import uuid from 'uuid';
import database from '../firebase/firebase';

/* previous process */
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

/* with database and thunk */
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expense').push(expenseData).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenseData
            }))
        })
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expense/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        })
    }
}


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expense/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}



// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
export const startSetExpenses = () => {
    // access dispatch by the redux lib.
    return (dispatch) => {
        // promise gets returned allow us to have access "then" in app.js
        return database.ref('expense').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            // data in redux
            dispatch(setExpenses(expenses));
        })
    }
}