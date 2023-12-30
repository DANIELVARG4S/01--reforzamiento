import { reqRestApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import React, { useEffect, useRef, useState } from 'react'


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect(() => {
        //LLAMANDO API
        cargarUsuarios()
    }, [])
    

    const cargarUsuarios = async() => {

        const resp = await reqRestApi.get<ReqResListado>('/users',{
            params: {
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
            // paginaRef.current ++;
        } else {
            paginaRef.current --;
            alert('No hay mas registros')
        }
    }
    

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios()
    }

    const paginaAnterior = async() => {
        if(paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

