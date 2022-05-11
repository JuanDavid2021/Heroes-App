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
    <div style={{height:"100vh"}}>
    <h1 className='text-light mt-5' style={{display:"inline", marginLeft:"10px"}}>Búsquedas</h1>

    <div className='row'>
       <div className='col-5'>
           <form onSubmit={(e)=>handleChange(e)}>
             <input
             type="text"
             placeholder="Busca un heroe"
             className='form-control'
             style={{marginLeft:"10px"}}
             name="searchText"
             autoComplete='off'
             onChange={(e)=>handleInputChange(e)}
             value={searchText}
             />

             <button type="submit" className='btn btn-primary mt-2' style={{marginLeft:"10px"}}>
                Buscar
             </button> 
           </form>
       </div>

       <div className='col-6' style={{marginTop:"-50px"}}>
         <h1 className='text-light m-0'>Resultados</h1>

         {
          (q==="")? <div className='alert alert-info' style={{width:"80%", height:"50px", marginTop:"2px", textAlign:"center", justifyContent:"center"}}>Busca un héroe</div>
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
    </div>
  )
}
