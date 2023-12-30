import React from 'react'

export const TiposBasicos = () => {

    const nombre:String | number = "fernando";
    // nombre = 123;
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: String[] = []; // 'Velocidad', 'Fuerza', 'Agua' , Evitar tipo any


    return (
    <>
        <h3>TiposBasicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'Esta Activo' : 'No activo'}
        <br />
        {poderes.join(',')}
    </>
    )
}
