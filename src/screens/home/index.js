import React, { useEffect,useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { backgroundChange } from '../../redux/actions'
import Card from '../../components/edificioCard'
import { Col } from 'react-bootstrap'
import axios from'axios'

export default function Home(){
    const style = useSelector(state => state.style)
    const [useEdificios,setEdificios] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        (async () => {
            await axios.get('http://localhost:5000/api/edificios',{headers:{"Content-Type":'application/json'}})
            .then(response =>{
                setEdificios(response.data)
            })
        })()
        dispatch(backgroundChange(0))
        return () => {
            dispatch(backgroundChange(1))
        }
    },[])
    return (
        <>
        {useEdificios != []?<>
            {useEdificios.map(val => 
            <Card
                nombre={val.nombre}
                direccion={val.direccion}
                id={val.id}
            />
            )}
        </>:'No hay edificios'}
        </>
    )
}