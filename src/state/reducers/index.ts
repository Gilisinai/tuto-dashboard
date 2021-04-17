import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'

const reducers = combineReducers({
    example: exampleReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>