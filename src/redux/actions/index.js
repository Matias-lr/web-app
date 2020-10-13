import {GET_TOKEN, GET_USER, LOGOUT_USER} from './actionTypes'
import axios from 'axios'

export const addToken = payload => ({
    type: GET_TOKEN,
    payload
})

export const getUser = token => {
    return (dispatch,getState) => {
        return axios.get('http://localhost:5000/api/user',{headers:{Authorization:'Bearer ' + token}})
        .then(response => {
            console.log(response)
            dispatch({
                type:GET_USER,
                payload:response.data
            })
            console.log(getState())
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const logoutUser = token =>{
    return (dispatch,getState) =>{
        return axios.get('http://localhost:5000/api/user/logout',{headers:{Authorization:'Bearer ' + token}})
        .then(response =>{
            dispatch({
                type:LOGOUT_USER
            })
            console.log(getState())
        })
    }
}