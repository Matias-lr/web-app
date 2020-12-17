import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import Loading from '../../fluid-loader.gif'
import './arriendo.css'
import axios from 'axios'

export default function Arriendo(props){
    let { id } = useParams();
    const [useTotal,setTotal] = useState(15000)
    const [useInicio,setInicio] = useState()
    const [useFinal,setFinal] = useState()
    const [useLoading,setLoading] = useState(0)
    const handleChange = (event) => {
        switch(event.target.name){
            case 'trip-start':
                setInicio(event.target.value)
            case 'trip-end':
                setFinal(event.target.value)
            default:
        }
        if(useInicio != null && useFinal != null){
            var date1 = new Date(useInicio); 
            var date2 = new Date(useFinal); 
            
            // To calculate the time difference of two dates 
            var Difference_In_Time = date2.getTime() - date1.getTime(); 
            
            // To calculate the no. of days between two dates 
            var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24)) + 1;
            console.log(useInicio,useFinal)
            setTotal(15000 * 5)
        }
      }
    const HandleClick = () =>{
        setLoading(1)
        setTimeout(()=>{
            setLoading(2)
        },3000)
    }
    return(
        <div style={{'height':'90%','width':'100%','backgroundColor':'#002942','borderRadius':'1em','padding':'1.5em'}}>
            {useLoading == 0? <><input name="name" style={{'width':'48%'}} type="text" placeholder="Nombre completo"/>
                <input name="rut" style={{'width':'48%'}} type="text" placeholder="rut"/>
                <input name="n_acompañantes" style={{'width':'30%'}} type="number" placeholder="numero de acompañantes"/>
                <select id="standard-select" style={{'width':'30%'}}>
                    <option disabled selected>Selecciona un tour(no obligatorio)</option>
                    <option value="1">Visita al monte</option>
                    <option value="2">Visita guiada por los museos de la zona</option>
                    <option value="3">Viaje en barco</option>
                </select>
                <select id="standard-select" style={{'width':'30%'}}>
                    <option disabled selected>Selecciona una opcion de transporte</option>
                    <option value="1">Completo</option>
                    <option value="2">Solo ida</option>
                    <option value="3">Solo regreso</option>
                </select>
                <div style={{'width':'47%','marginRight':'1%'}}>
                    <label style={{'width':'48%','marginRight':'1%','color':'white'}}>Fecha Ida</label>
                    <input style={{'width':'48%','marginRight':'1%'}} type="date" id="start" name="trip-start"
                    min="2020-12-15" onChange={handleChange}></input>
                </div>
                <div style={{'width':'47%','marginRight':'1%'}}>
                    <label style={{'width':'48%','marginRight':'1%','color':'white'}}>Fecha Regreso</label>
                    <input style={{'width':'48%','marginRight':'1%'}} type="date" id="end" name="trip-end"
                    min="2020-12-15" onChange={handleChange}></input>
                </div>
                <h1 style={{color:'white'}}>Total:{useTotal}</h1>
                <input name="tarjeta_n" style={{'width':'69%'}} type="text" placeholder="Numero de tarjeta"/>
                <input name="mes" style={{'width':'9%'}} type="text" placeholder="mes vencimiento"/>
                <input name="anio" style={{'width':'9%'}} type="text" placeholder="año vencimiento"/>
                <input name="codigo" style={{'width':'9%'}} type="text" placeholder="codigo"/>
                <button onClick={HandleClick}>Pagar por {useTotal/2}</button>
            </>:<>
                {useLoading == 1? <div style={{height:'100%'}} align="center"><img style={{float:'center',marginTop:'15%'}} src={Loading}/></div>:
                 <div style={{height:'100%'}} align="center"><h1 style={{float:'center',marginTop:'15%',color:'green'}}>Pago realizado con exito!</h1></div>}
            </> }
        </div>
    )
}