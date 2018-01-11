import { createStore } from 'redux';

// Action Generators - function that return action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    //incrementBy: incrementBy ----> same as 'incrementBy'
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DCREMENT',
    decrementBy
})

// setCount
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

//resetCount
const resetCount = ({ count = 0 } = {}) => ({
    type: 'RESET',
    count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change the states or actions

let a = 10;
const add = (b) => {
    return a + b;
}


const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            };
        case 'RESET': 
            return {
                count: 0
            };
        default: 
            return state;
    }
}

const store = createStore(counterReducer);

// keep watching the changes of the state
// store.subscribe(() => {
//     console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// increament
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// unsubscribe();
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
