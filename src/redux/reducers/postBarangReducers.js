
import { POST_BARANG_REQUEST } from "../types/type";
import { POST_BARANG_SUCCESS } from "../types/type";
import { POST_BARANG_ERROR } from "../types/type";

export const postBarangReducer=(state='',action)=>{

    switch(action.type){
        case POST_BARANG_REQUEST:
            return{
                ...state,
                loading:true,
                status:"loading"
            }
        case POST_BARANG_SUCCESS:
            return{
                loading:false
            }
        case POST_BARANG_ERROR:
            return{
                loading:false,
                error:action.payload
            }

        default : return state
    }
}