import { DCScreen } from "../components/dc/DCScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"
import {Routes, Route} from "react-router-dom"
import {HeroScreen } from "../components/hero/HeroScreen"
import "./Dashboard.css"


export const DashboardRoutes = () => {
  return (
    <div className="fondo">
       <Navbar/>

       <Routes>
         <Route path="marvel" element={<MarvelScreen/>}/>
         <Route path="dc" element={<DCScreen/>}/>  
         <Route path="search" element={<SearchScreen/>}/> 
         <Route path="hero/:heroeId" element={<HeroScreen/>}/>     
         <Route path="/" element={<MarvelScreen/>}/> 

      </Routes> 
    </div>
  )
}
