import React from 'react'
import './Country.css'
import efel from './Eifiel.jpg'
import bigbang from './london.jpg'
import york from './newYork.jpg'
import piramida from './piramida.jpg'
import china from './china.jpg'
import india from './india.jpg'

const Country =  () =>{
    return(
        <div className='Countries'>
            <p className='desc-location'>The most visited places in the world</p>
            <div className='container'>
              <div className='location'>
                <div className='location-names'>
                    <img src={efel} alt='Eifiel Tower' />
                    <p className='NameL'>Eifiel Tower</p>
                    
                </div>

                <div className='location-names'>
                    <img src={bigbang} alt='BigBang'/>
                    <p className='NameL'>BigBang</p>
                    
                </div>

                <div className='location-names'>
                    <img src={york} alt='Statue of Liberty'/>
                    <p className='NameL'>Statue of Liberty</p>
                    
                </div>

                <div className='location-names'>
                    <img src={piramida} alt='Pyramida'/>
                    <p className='NameL'>Pyramida</p>
                </div>

                <div className='location-names'>
                    <img src={china} alt='Chinese'/>
                    <p className='NameL'>The Great Chinese Wall</p>
                </div>

                <div className='location-names'>
                    <img src={india} alt='Taj Mahal'/>
                    <p className='NameL'>Taj Mahal</p>
                </div>


              </div>
            </div>
        </div>
    )
}
export default Country;