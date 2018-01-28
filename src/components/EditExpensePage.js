import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component
// Seup mapdispatchToprops editExpensePage and removeExpense

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id }); // expenses action에서 id를 {id} 형태로 받기 때문에 형태 조심
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}
// react-redux
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);




/*

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button 
                onClick={() => {
                    console.log(props.expense.id);
                    // props.dispatch(removeExpense(props.expense.id));
                    props.dispatch(removeExpense({ id: props.expense.id })); // expenses action에서 id를 {id} 형태로 받기 때문에 형태 조심
                    props.history.push('/');
            }}>Remove</button>
        </div>
    );
}

// 넘어온 props를 사용하기 위해 argument로 같이 던져줌
const mapStateToProps = (state, props) => {
    return {
        // props의 id와 매칭되는 expense를 찾아서 expense에 담는다
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

*/