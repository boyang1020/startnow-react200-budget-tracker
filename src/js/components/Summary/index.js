import Summary from './Summary';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
    expenseItems: store.expense.lineItems,
    incomeItems: store.income.lineItems 
    };
}

export default connect(mapStoreToProps)(Summary);