export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        // sum values w/ reduce() function
        return expenses
            .map((expense) => expense.amount).reduce((sum, val) => {
                return sum + val
            }, 0)
    }
};


//const total = getExpensesTotal(expenses); // look into map and reduce
//console.log(total); // 114195