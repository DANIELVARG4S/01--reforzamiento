import React from 'react'
//Interface reglas de validacion a los objetos no se puede instalar un objeto
interface Persona {
    nombreCompleto: String;
    edad: number;
    direccion: Direccion
}
interface Direccion {
    pais: String;
    CasaNo: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Daniel',
        edad: 32,
        direccion: {
            pais: 'Mexico',
            CasaNo: 55
        }
    }



    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                {/* {JSON.stringify(persona,['nombre'],2)} */}
                    {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </>
    )
}
