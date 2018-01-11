// Export a stateless functional component
// description, amount, createAt

import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

// const ExpenseListItem = (props) => (
//     <div>
//         <h3>{props.description}</h3>
//         <p>{props.amount}</p>
//     </div>
// );

// using destructuring expression
// const ExpenseListItem = ({ description, amount }) => (
//     <div>
//         <h3>{description}</h3>
//         <p>{amount}</p>
//     </div>
// );

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>amount: {amount}</p>
        <p>{createdAt}</p>
    </div>
);

/* Remove button을 EditExpensePage로 옮김 */

// props 사용 - expense reducer에서 argument를 id로 바꿔줘야함
// const ExpenseListItem = (props) => (
//     <div>
//         <h3>{props.description}</h3>
//         <p>{props.amount}</p>
//         <button onClick={() => {
//                 props.dispatch(removeExpense(props.id));
//                 console.log(props);
//         }}>Remove</button>
//     </div>
// );


// export default connect()(ExpenseListItem);
export default ExpenseListItem