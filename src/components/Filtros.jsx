import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select 
                    value={filtro}
                    onChange={e =>{setFiltro(e.target.value)}}
                
                >
                    <option value="">--Todas las Categorias--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="gimnasio">Gimnasio</option>
                    <option value="carro">Carro</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="educacion">Educacion</option>
                </select>

            </div>
        </form>
      
    </div>
  )
}

export default Filtros
