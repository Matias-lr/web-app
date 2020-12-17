import {GET_TOKEN, GET_USER, LOGOUT_USER,BACKGROUND_CHANGE,GET_BUILDINGS} from './actionTypes'
import axios from 'axios'

export const addToken = payload => ({
    type: GET_TOKEN,
    payload
})

export const getUser = token => {
    return dispatch => {
        return axios.get('http://localhost:5000/api/user',{headers:{Authorization:'Bearer ' + token}})
        .then(response => {
            dispatch({
                type:GET_USER,
                payload:response.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const logoutUser = token =>{
    return dispatch =>{
        return axios.get('http://localhost:5000/api/user/logout',{headers:{Authorization:'Bearer ' + token}})
        .then(response =>{
            dispatch({
                type:LOGOUT_USER
            })
        })
    }
}

export const getBuildings = () => {
    return dispatch =>{
        return axios.get('http://localhost:5000/api/edificios',{headers:{"Content-Type":'application/json'}})
        .then(response =>{
            dispatch({
                type:GET_BUILDINGS,
                payload:response.data
            })
        })
    }
}
export const backgroundChange = (payload) =>({
    type:BACKGROUND_CHANGE,
    payload
})