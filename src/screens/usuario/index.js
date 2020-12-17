import React, { useEffect,useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { backgroundChange } from '../../redux/actions'
import axios from 'axios'
import './user.css'
import Avatar from '../../profile.png'
import {FaJenkins} from "react-icons/fa"

export default function Usuario(){
    const [sesions,setSesions] = useState()
    const [isLoadingSesion,setLoadingSession] = useState(true)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handelSessionsPlace = async(sesion) =>{
        var values = await axios.get(`https://freegeoip.app/json/${sesion.adress}`,{"headers": {
            "accept": "application/json",
            "content-type": "application/json"
          }})
        .then(response =>response.data)
        .catch(err => console.log(err))
        return {...sesion,country:values.country_code + '-' + values.region_name}
    }
    useEffect(()=>{
        (async () => {
            await axios.get('http://localhost:5000/api/tokenByUser',{headers:{Authorization:'Bearer ' + user.token}})
            .then(async(response) =>{
                var sesions = await Promise.all(response.data.slice(0,3).map(val => handelSessionsPlace(val))).then(response => response)
                console.log(sesions)
                setSesions(sesions)
                setLoadingSession(false)
            })
        })()
        dispatch(backgroundChange(1))
    },[])
    const handleClick = (e) => {
        document.getElementById('file').click()
    }
    return (
        <>
        <div className="headerCard">
            <div className="PrincipalProfile">
                <a onClick={handleClick}>
                    <img src={Avatar}/>
                </a>
                <input type="file" id="file" style={{display: "none"}}/>
                <p className="title"><nombre>{user.nombre} {user.tipoUsuario === "Administrador"&&<FaJenkins/>}</nombre> <br></br> 
                <email>{user.email}</email></p>
            </div>
        </div>
        <div className="leftCard">
            <h2>Opciones de usuario</h2>
            <form id="editUser">
                <input type="text" className="flatInput small" placeholder="Username" value={user.nombre}></input>
                <input type="text" className="flatInput small" placeholder="Email" value={user.email} disabled></input>
                <input type="text" className="flatInput big" placeholder="Telefono" value={user.telefono}></input>
                <input type="text" className="flatInput big" placeholder="Rut" value={user.rut} disabled></input>
                <input type="password" className="flatInput big" placeholder="Contraseña" required></input>
                <input type="password" className="flatInput big" placeholder="Confirmar contraseña" required></input>
            </form>
        </div>
        <div className="rigthCard">
            <h2>Sesiones</h2>{isLoadingSesion? <h1>cargando</h1>:
            <div>
                <table class="rwd-table">
                    <tr>
                        <th>Ip</th>
                        <th>Zona</th>
                        <th>Dispositivo</th>
                        <th>Opciones</th>
                    </tr>
                    {sesions.map(val =>{
                        return <tr>
                            <td>{val.adress}</td>
                            <td>{val.country}</td>
                            <td>{val.deviceName}</td>
                            <td>opciones</td>
                        </tr>
                    })}
                </table>
                <div>
                <h3>Sesiones activas:{sesions.length}</h3> <h3>Sesiones baneadas:{sesions.filter(val => val.baned == 1).length}</h3></div>
            </div>
            }
            </div>
        </>
    )
}
