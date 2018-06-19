import { REFUSED } from "dns";

const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function INCOMEReducer(state = defaultState, action) {
    const { type, payload } = action,
    switch (type) {
        case 'UPDATE_INCOME_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            };
        }
        case 'UPDATE_INCOME_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            };
        }
        case 'ADD_INCOME': {
            return {
                description: '',
                action: '',
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]

            };
        }
        default: {
            return state;
        }
    }
}