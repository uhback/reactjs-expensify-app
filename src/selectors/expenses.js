import moment from 'moment';

// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        // startDate(125): false || true ----> true
        // startDate(undefined): false || false ----> false : return value X
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number'|| expense.createdAt >= endDate;


        /* using moment package */
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        //console.log('text: ' + text.toLowerCase() + '/ ' + typeof(startDate) + ' + ' + startDateMatch + ' + ' + endDateMatch+ ' + ' + textMatch);
        
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // b first : 내림차순
            //return b.createdAt - a.createdAt // 내림차순 정렬
            //return a.createdAt - b.createdAt // 오름차순 정렬
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}