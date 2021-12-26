import React from 'react'
import './Special.css'
import bukovel from'./bukovel.jpg'
import lac from './lacurosu.jpg'
import norvegia from './norvegia.jpg'
import sea from './seaegipt.jpg'

const Special = () => {
    return(
        <div>
            <h1 className='ofertsname'>Oferte Speciale</h1>
            <div className='back-image'>
            <div className='container'>
                <div className='oferts'>
                    <img src={bukovel} alt='bukovel' />
                <div className='detalii'>
                    <p className='point'>La munte in Bukovel</p>
                    <p className='reducere'> 200 &#8364;</p>
                    <p className='price'>  160 &#8364; </p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={lac} alt='Lacul Rosu' />
                <div className='detalii'>
                    <p className='point'>Excursi in Lacu rosu Romania</p>
                    <p className='reducere'> 100 &#8364;</p>
                    <p className='price'>  60 &#8364; </p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={norvegia} alt='Norvegia' />
                <div className='detalii'>
                    <p className='point'>Descopera Norvegia impreuna cu noi</p>
                    <p className='reducere'> 400 &#8364;</p>
                    <p className='price'>  320 &#8364; </p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={sea} alt='Egipt' id='egipt' />
                <div className='detalii'>
                    <p className='point'>La odihna in Egipt</p>
                    <p className='reducere'> 180 &#8364;</p>
                    <p className='price'>  140 &#8364; </p>
                </div>
                </div>
            </div> 
            </div>
        </div>
    )
}
export default Special;