import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean;
    token: null  | String;
    username:String;
    nombre: String
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: String,
    nombre: String
}

type AuthAction = 
    | {type: 'logout'}
    | {type:'login', payload: LoginPayload};
//funcion reducer siempre deve devolver algun tipo de estado de initialState

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch(action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token:'ABC123',
                nombre,
                username
                // nombre: action.payload.nombre,
                // username: action.payload.username
                // ...state
            }

        default:
            return state;

    }
}




export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'});
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: 'Daniel',
                username: 'Dante'
            }
        })
    }
    const Logout = () => {
        dispatch({
            type: 'logout', 
        })
    }

    
    if (validando) {
        return (
            <>
            <h3>Login</h3>
            <div className='alert alert-info'>
                Validando...
            </div>
            </>
        )
    }
    

    return (
        <>
        
            <h3>Login</h3>
            {
                (token)
                ? <div className='alert alert-success'>Autenticado como: {nombre}</div>
                : <div className='alert alert-danger'>No Autenticasdo</div>
            }            

            {
                (token)
                ? (
                    <button 
                        className='btn btn-danger'
                        onClick={Logout}
                    >
                        Logout
                    </button>
                )
                : (
                    <button
                        className='btn btn-primary'
                        onClick={login}
                    >
                        Login
                    </button>
                )
            }
        </>
    )
}
