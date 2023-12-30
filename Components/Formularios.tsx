
import { useForm } from '../hooks/useForm'

export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: 'Orion@gmmail',
        password: 1234
    });

    return (
        <>
            <div>Formularios</div>
            <input type="text" 
            className='form-control'
            placeholder='Email'
            value={email}
            onChange={ ({ target} ) => onChange(target.value, 'email')}
            />

            <input type="text"
            className='form_control mt-2 mb-2'
            placeholder='Password' 
            value={password}
            onChange={ ({target} ) => onChange(target.value, 'password')}
            />

            <code>
                <pre> {JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}
