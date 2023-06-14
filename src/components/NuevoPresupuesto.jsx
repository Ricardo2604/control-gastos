import React, { Children, useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState(' ')

    const handlePresupuesto =  (e) => {
        e.preventDefault();
        if(!(presupuesto)|| presupuesto < 0 ){
            setMensaje('No es un presupuesto valido')
            setTimeout(() => {
                setMensaje('')
            }, 2500);
            
            return
        }
        setMensaje(' ')
        setIsValidPresupuesto(true)   

    };

    const handleInputFocus = () => {
        if (presupuesto === 0) {
          setPresupuesto('');
        }
      };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
        className='formulario'
        onSubmit={handlePresupuesto}
        >
            <div className='campo'>
                <label> Definir Presupuesto </label>
                <input
                   className='nuevo-presupuesto'
                   type='number'
                   placeholder=''
                   value={presupuesto} 
                   onChange={ (e) => setPresupuesto(Number(e.target.value) ) }
                   onFocus={handleInputFocus}
                />
            </div>

            <input
            type='submit'
            value="Añadir"            
            />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
