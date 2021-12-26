import React from 'react'
import './Categories.css'

const Categories = () =>{
    return(
     <div>
         <h2>Categories</h2>

        <div className='Container'>
            <div className='slider' id='mare'>
                <h3 className='title'>Sea</h3>
            </div>
            <div className='slider' id='munte'>
                <h3 className='title'>Mountain</h3>
            </div>
            <div className='slider' id='excursii'>
                <h3 className='title'>Excursion</h3>
            </div>
            <div className='slider' id='bilete'>
                <h3 className='title'>Ticketing</h3>
            </div>
        </div>
        
    </div>    
    )
}
export default Categories;