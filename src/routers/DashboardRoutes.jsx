import { DCScreen } from "../components/dc/DCScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"
import {Routes, Route} from "react-router-dom"
import {HeroScreen } from "../components/hero/HeroScreen"


export const DashboardRoutes = () => {
  return (
    <div className="container">
       <Navbar/>

       <Routes>
         <Route path="marvel" element={<MarvelScreen/>}/>
         <Route path="dc" element={<DCScreen/>}/>  
         <Route path="search" element={<SearchScreen/>}/> 
         <Route path="/" element={<MarvelScreen/>}/> 
         <Route path="/hero" element={<HeroScreen/>}/>     

      </Routes> 
    </div>
  )
}
