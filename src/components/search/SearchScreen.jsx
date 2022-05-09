import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import {useForm} from "../../hooks/useForm"
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from "query-string"

export const SearchScreen = () => {

  
  const navigate = useNavigate()
  const location = useLocation()

  const {q=''} = queryString.parse(location.search)
  const heroesFilted = useMemo(()=>getHeroesByName(q),[q])
  const [formValues, handleInputChange] = useForm({
    searchText:q,
  })
  
 const {searchText} = formValues;



 const handleChange =(e)=>{

   e.preventDefault()
   navigate(`?q=${searchText}`)
 } 



  return (
    <>
    <h1>Búsquedas</h1>

    <div className='row'>
       <div className='col-5'>
           <h4>Buscar</h4>
           <hr/>

           <form onSubmit={(e)=>handleChange(e)}>
             <input
             type="text"
             placeholder="Busca un heroe"
             className='form-control'
             name="searchText"
             autoComplete='off'
             onChange={(e)=>handleInputChange(e)}
             value={searchText}
             />

             <button type="submit" className='btn btn-primary mt-2'>
                Buscar
             </button> 
           </form>
       </div>

       <div className='col-7'>
         <h4>Resultados</h4>
         <hr/>
         {
          (q==="")? <div className='alert alert-info'>Busca un héroe</div>
           : (heroesFilted.length===0) && <div className='alert alert-danger'>No hay resultados para "{q}"</div>
         }

         {
           heroesFilted.map(hero=>(
             <HeroCard
              key={ hero.id}
              {...hero}
             />
           ))
         }
       </div>
    </div>
    </>
  )
}
