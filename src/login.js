import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {addToken} from './redux/actions'
import {useHistory} from 'react-router-dom'
import './app.css';
import {osName,osVersion,browserName} from 'react-device-detect'
import os from 'os'

export const LoginPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [error,setError] = useState()

    const handleChange = (event) => {
      switch(event.target.name){
        case 'email':
          setEmail(event.target.value)
          break;
        case 'pass':
          setPass(event.target.value)
          break;
        default:
          break;
      }
    }
    const handelSubmit = async(event) =>{
      event.preventDefault()
      console.log(os.arch())
      await axios.post('http://localhost:5000/api/user/login',{email,pass,device_name:osName+' ' + osVersion + ' ' + browserName + ' ' + email,ip_adress:'199.232.0.0'})
      .then(res =>{
          dispatch(addToken(res.data))
          history.push("/")
        })
      .catch(err => {
        setError({
          code:err.response.status,
          message:err.response.data
        })
      })
    }
    return(
        <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handelSubmit}>
            <input name="email" type="text" placeholder="Email" onChange={handleChange}/>
            <input name="pass" type="password" placeholder="Contraseña" onChange={handleChange}/>
            <button>login</button>
            {error && <p>{error.message}</p> }
          </form>
            <p>No tienes una cuenta? <a href="#">registrate aqui</a></p>
        </div>
      </div>
    )
}