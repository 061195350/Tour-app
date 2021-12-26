import React from 'react'
import { NavLink } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Country from '../Country/Country'
import Text from '../Desc/Text'
import Special from '../OfertsSpecial/Special'

const AllComponents = () =>{
    return(
        <div>
            <Text />
            <Country />
            <Special />
              <div className='btnrezerv'>
                <div className='container'>
                <div className='send-rezerv'>
                <p><NavLink  to='/oferts' className='link'>Vezi mai multe oferte</NavLink></p>
              </div></div></div> 
            <Categories />
        </div>

    )
}
export default AllComponents;