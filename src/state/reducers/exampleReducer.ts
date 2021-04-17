import { ActionType } from '../action-types'
import { Action } from '../actions'

interface ExampleReducer {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const reducer = (
    state: ExampleReducer = initialState, 
    action: Action
    ): ExampleReducer => {
    switch (action.type) {
        case ActionType.SEARCH_EXAMPLE:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_EXAMPLE_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_EXAMPLE_ERROR:
            return {loading: false, error: action.payload, data: []}
        default:
            return state;
    }
}

export default reducer