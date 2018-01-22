import React from 'react'
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

/* my work */

// const ExpensesSummary = (props) => (
//     <div>
//         <h1>Total</h1>
//         <p>
//             Viewing {props.expenses.length} expenses totalling {numeral(props.selectExpensesTotal / 100).format('$0,0.00')}
//         </p>
//     </div>
// )

// const mapStateToProps = (state) => {
//     return {
//         expensesTotal: selectExpensesTotal(state.expenses),
//         expenses: selectExpenses(state.expenses, state.filters)
//     }
// };


/* Lecturer way */

const ExpensesSummary = ({ expensesCount, expensesTotal}) => {
    const expensesWords = expensesCount <= 1 ? 'expense' :'expenses';
    return (
        <div>
            <h1>
                Viewing {expensesCount} {expensesWords} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
            </h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect (mapStateToProps)(ExpensesSummary)