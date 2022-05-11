import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <>
    <h1 className='m-3 text-center text-light'>Marvel</h1>
    <HeroList publisher={"Marvel Comics"}/>
    </> 
  )
}
