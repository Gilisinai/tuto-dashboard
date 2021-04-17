import { ActionType } from '../action-types'

interface SearcExampleAction {
    type: ActionType.SEARCH_EXAMPLE;
}

interface SearcExampleSuccessAction {
    type: ActionType.SEARCH_EXAMPLE_SUCCESS;
    payload: string[];
}

interface SearcExampleErrorAction {
    type: ActionType.SEARCH_EXAMPLE_ERROR;
    payload: string;
}

export type Action =
    | SearcExampleAction
    | SearcExampleSuccessAction
    | SearcExampleErrorAction