import { GET_BARANG_REQUEST, GET_BARANG_SUCCESS, GET_BARANG_ERROR } from "../types/type"

const initialState = {
    users : [],
    loading : true
}

export const getBarangReducers=( state = initialState, action)=>{
    switch (action.type) {
        case GET_BARANG_REQUEST :
            return{
                ...state,
                loading : true,
                status : 'loading'
            }
        case GET_BARANG_SUCCESS :
            return{
                loading : false,
                status : 'success',
                users : action.payload
            }
        case GET_BARANG_ERROR :
            return{
                loading : false,
                error : action.payload,
                status : 'error'
            }

        default : 
            return state
    }
}