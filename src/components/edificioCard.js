import React from 'react'
import { Link } from 'react-router-dom'

export default function EdificioCard(props){
    const styleCard = {
        'width':'25%','height':'33vh','marginRight':'2%','border-radius':'5%'
    }
    return(
        <div style={styleCard} >
        <Link to={`/edificio/${props.id}`} style={{'textDecoration':'none'}}>
            <div style={{'height':'90%','backgroundImage':`url(https://icom.cl/new/wp-content/uploads/2019/08/foto-fachada-1.jpg)`,'backgroundSize':'cover','border-radius':'5% 5% 0 0'}}></div>
            <div style={{'height':'10%','backgroundColor':'#001f32','marginTop':'0','paddingTop':'auto','marginBottom':'0'}}>
            <p style={{'marginTop':'auto','marginBottom':'0','color':'white'}}>{props.nombre} - {props.direccion}</p>
            </div>
        </Link>
        </div>
    )
}