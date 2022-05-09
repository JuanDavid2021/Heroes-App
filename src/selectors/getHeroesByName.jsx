
import { heroes } from '../data/heroes'

export const getHeroesByName = (name)=>{
  
  if(name.length===0) return []

  else{
      name = name.toLowerCase();   
      return heroes.filter(h=>h.superhero.toLowerCase().includes(name))  
  }

}