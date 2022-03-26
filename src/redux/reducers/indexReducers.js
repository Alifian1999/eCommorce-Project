import { combineReducers } from 'redux'
import reducer from './counterReducers';
import { getBarangReducers } from './getBarangReducers';
import { userRegisterReducers } from './userRegisterReducers';
import { userLoginReducers } from './userLoginReducers';
import { hitungReducers } from './hitungReducers';

const allReducers= combineReducers({
    reducer:reducer,
    getBarangReducers:getBarangReducers,
    userRegisterReducers:userRegisterReducers,
    userLoginReducers:userLoginReducers,
    hitungReducers:hitungReducers
})

export default allReducers;