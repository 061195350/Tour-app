import React from 'react'
import lac from './lacul-rosu.jpg'
import orh from './orheiul.jpg'
import sor from './soroca.jpg'

const Excursii = () =>{
    return(
        <div>
             <h1 className='Sea-Text'>The best Excursion </h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={lac} alt='Lacu-Rosu' />
                <div className='back-oferts'>
                    <a className='point'>Lacu-Rosu</a>
                    <p className='reducere'> 80 &#8364;</p>
                    <p className='price'>  50 &#8364; </p>
                    <p className='date'>2021-12-30T18:00+02:00</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={orh} alt='Orheiul-Vechi' />
                <div className='back-oferts'>
                    <a className='point'>Orheiul Vechi</a>
                    <p className='reducere'> 20 &#8364;</p>
                    <p className='price'>  10 &#8364; </p>
                    <p className='date'>2021-12-30T18:00+02:00</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={sor} alt='Soroca' />
                <div className='back-oferts'>
                    <a className='point'>Cetatea Sorocii</a>
                    <p className='reducere'> 15 &#8364;</p>
                    <p className='price'>  10 &#8364; </p>
                    <p className='date'>2021-12-30T18:00+02:00</p>
                </div>
            </div>

        </div>
    </div>
    )
}
export default Excursii;