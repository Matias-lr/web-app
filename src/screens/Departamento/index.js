import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import loading from '../../fluid-loader.gif'
import { Link } from 'react-router-dom'
import {BsFillAlarmFill,BsFillAspectRatioFill,BsFillArchiveFill,BsFillAwardFill, BsFillBagFill, BsFillBellFill, BsFillClockFill, BsFillGiftFill, BsFillBrightnessAltLowFill, BsFillBrightnessHighFill, BsFillBucketFill, BsFillDisplayFill, BsBrightnessHigh, BsGearFill, BsLifePreserver, BsTools} from "react-icons/bs"

export default function Departamento(props){
    let { id } = useParams();
    const [useDepa,setDepa] = useState()
    const [useEdificio,setEdificio] = useState()
    const [isLoading,setLoading] = useState(true)
    useEffect(() => {
        (async () =>{
            await axios.get(`http://localhost:5000/api/departamentoByEdificio/${id}`,{headers:{"Content-Type":'application/json'}})
            .then(response =>{
                setDepa(response.data)
                console.log(response.data)
            })
            await axios.get('http://localhost:5000/api/edificios',{headers:{"Content-Type":'application/json'}})
            .then(response =>{
                setEdificio(response.data.find(val => val.id == id))
                setLoading(false)
            })
        })()
    },[])
    return(
        <div style={{'height':'90%','width':'100%','backgroundColor':'#002942','borderRadius':'1em','padding':'1.5em'}}>
            {isLoading? <div style={{height:'100%'}} align="center"><img style={{float:'center',marginTop:'15%'}} src={loading}/></div>:
            <>
                <div style={{'height':'50%',display:'flex'}}>
                    <img style={{'height':'100%','borderRadius':'1em'}} src='https://icom.cl/new/wp-content/uploads/2019/08/foto-fachada-1.jpg'/>
                    <div style={{'height':'100%',width:'30%',padding:'1em',color:'white'}}>
                        <h1>{useEdificio.nombre}</h1>
                        <h3><b>Telefono:</b> {useEdificio.telefono}</h3>
                        <h3><b>Region:</b> {useEdificio.region}</h3>
                        <h3><b>Comuna:</b> {useEdificio.comuna}</h3>
                    </div>
                    <div style={{'height':'100%',width:'30%',padding:'1em',color:'white'}}>
                        <h1 align='center'>Servicios</h1>
                        <div>
                            <div style={{marginBottom:'2em'}}>
                                <BsFillAlarmFill style={{width:'25%'}}/>
                                <BsFillArchiveFill style={{width:'25%'}}/>
                                <BsFillAspectRatioFill style={{width:'25%'}}/>
                                <BsFillAwardFill style={{width:'25%'}}/>
                            </div>
                            <div style={{marginBottom:'2em'}}>
                                <BsFillBagFill style={{width:'25%'}}/>
                                <BsFillBellFill style={{width:'25%'}}/>
                                <BsFillClockFill style={{width:'25%'}}/>
                                <BsFillGiftFill style={{width:'25%'}}/>
                            </div>
                        </div>
                        <h1 align='center'>Areas</h1>
                        <div>
                            <div style={{marginBottom:'2em'}}>
                                <BsFillBrightnessAltLowFill style={{width:'25%'}}/>
                                <BsFillBrightnessHighFill style={{width:'25%'}}/>
                                <BsFillBucketFill style={{width:'25%'}}/>
                                <BsFillDisplayFill style={{width:'25%'}}/>
                            </div>
                            <div style={{marginBottom:'2em'}}>
                                <BsBrightnessHigh style={{width:'25%'}}/>
                                <BsGearFill style={{width:'25%'}}/>
                                <BsLifePreserver style={{width:'25%'}}/>
                                <BsTools style={{width:'25%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{'height':'50%',display:'flex',paddingTop:'1.5em',paddingBottom:'1.5em'}}>
                    {useDepa.map(val =>
                    <div style={{backgroundColor:'white','height':'90%',width:'25%','borderRadius':'1em',marginRight:'2em',background:'#E0E0E0'}} >
                        <div style={{display:'flex'}}>
                            <img style={{width:'40%',borderRadius:'1em 0 0 0'}} src='https://blog.capitalizarme.com/wp-content/uploads/2016/07/shutter-7-2.jpg'></img>
                            <div style={{width:'60%',height:'40%',padding:'1em'}}>
                                <h3>Estado: {val.estado}</h3>
                                <h3>m2: {val.metros_cuadradros}</h3>
                            </div>
                        </div>
                        <div style={{height:'30%',width:'100%',textAlign:'center'}}>
                            <h4>Baños: {val.banios}</h4>
                            <h4>Habitacion: {val.num_habitaciones}</h4>
                            <h4>Nro habitacion: {val.num_habitacion}</h4>
                            <Link to={`/arriendo/${val.id}`} style={{'textDecoration':'none'}}>           
                                <button style={{backgroundColor:'#EC5269',borderRadius:'0.5em',color:'#fff',padding:'1em'}}>reservar ${val.precio_noche}/n</button>
                            </Link>
                        </div>
                    </div> )}
                </div>
            </>}
        </div>
    )
}