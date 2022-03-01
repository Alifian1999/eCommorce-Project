import { combineReducers } from 'redux'
import reducer from './counter';

const allReducers= combineReducers({
    reducer:reducer,
})

export default allReducers;