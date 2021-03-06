import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { getUser, logoutUser } from './redux/actions'
import Avatar from './profile.png'
import Screens from './router'
import {
  BrowserRouter as Router,
  Link
  
} from "react-router-dom";
import './style.css'

export const Home = () => {
    const user = useSelector(state => state.user)
    const style = useSelector(state => state.style)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(()=>{
        if(!user.token){
            history.push("/login")
        }else{
            dispatch(getUser(user.token))
        }
    },[user.token])

    const handleLogout = () =>{
        dispatch(logoutUser(user.token))
    }
    
    return(
        <Router>
            <div>
                <body>
                    <input type="checkbox" id="check"/>
                    <header>
                    <label for="check">
                        <i className="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    <div className="left_area">
                        <h3>Turismo <span>Real</span></h3>
                    </div>
                    <div className="right_area">
                        <a onClick={handleLogout} className="logout_btn">Logout</a>
                    </div>
                    </header>
                    <div className="mobile_nav">
                        <div className="nav_bar">
                            <img src={Avatar} className="mobile_profile_image" alt=""/>
                            <i className="fa fa-bars nav_btn active"></i>
                        </div>
                        <div className="mobile_nav_items">
                            <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                            <a href="#"><i className="fas fa-cogs"></i><span>Components</span></a>
                            <a href="#"><i className="fas fa-table"></i><span>Tables</span></a>
                            <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
                            <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
                            <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="profile_info">
                            <img src={Avatar} className="profile_image" alt=""/>
                            <h3 style={{color:'white'}}>{user.nombre}</h3>
                            <h4>{user.email}</h4>
                        </div>
                        <Link to={'/'}><i className="fas fa-desktop"></i><span>Inicio</span></Link>
                        <a href="#"><i className="fas fa-cogs"></i><span>Arriendos</span></a>
                            <Link to={'/user'}><i className="fas fa-th"></i><span>Mi usuario</span></Link>
                        { (user.tipoUsuario === 'Administrador') &&
                            <div>
                                <a href="#"><i className="fas fa-info-circle"></i><span>Panel de administracion</span></a>
                                <a href="#"><i className="fas fa-sliders-h"></i><span>Documentos</span></a>
                            </div>
                            }
                        </div>

                        <div className={`${(style.back == 'image')? 'activeContent':'unActiveContent'}` }>
                            <Screens/>
                        </div>

                    </body>
            </div>
        </Router>
    )
}