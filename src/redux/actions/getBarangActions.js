import { GET_BARANG_REQUEST, GET_BARANG_SUCCESS, GET_BARANG_ERROR } from "../types/type"
import API from '../API'



export const getAllBarang = ()=> async dispatch=>{
    try {     
        dispatch(getBarangRequest())
        const response= await API.get(`/product/all`) //api.get tidak berfungsi
        const users = response.data
        dispatch(getBarangSuccess(users))
    } catch (error) {
        dispatch(getBarangError(error))
    }
}

// export const getBarangById =(data)= async (dispatch)=>{
//     try {
//         dispatch(getBarangRequest())

//         const response = await API.get('/:user/${data}')
//          const users = response.data
//         dispatch(getBarangSuccess(response))
//     } catch (error) {
//          dispatch(getBarangError(error))
//     }
// }


 const getBarangRequest=(e)=>{
    return{
        type: GET_BARANG_REQUEST,
    }
}

 const getBarangSuccess=(users)=>{
    return{
        type : GET_BARANG_SUCCESS,
        payload : users
    }
}

const getBarangError=(error)=>{
    return{
        type: GET_BARANG_ERROR,
        payload : error
    }
}