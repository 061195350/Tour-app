import React from 'react'
import './Montaint.css'
import Arm from './armenia.jpg'
import bukovel from './bukovel.jpg'
import France from './France.jpg'
import geo from './Georgia.jpg'
import  rom from './rom.jpg'



const Mountain = () => {
    return(
        <div className='SeaTour'>
            <div >
                <h1 className='Sea-text'>The best Mountain Tours</h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={bukovel} alt='bukovel' />
                <div className='detalii'>
                    <p className='point'>Bukovel</p>
                    <p className='reducere'> 150 &#8364;</p>
                    <p className='price'>  120 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>Oricand doritii !!!</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={France} alt='france' />
                <div className='detalii'>
                    <p className='point'>France</p>
                    <p className='reducere'> 400 &#8364;</p>
                    <p className='price'>  360 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>Oricand doriti !!!</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={geo} alt='Georgia' />
                <div className='detalii'>
                    <p className='point'>Georgia</p>
                    <p className='reducere'> 300 &#8364;</p>
                    <p className='price'>  260 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>Oricand doritii!!!</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={rom} alt='Romania' />
                <div className='detalii'>
                    <p className='point'>Romania</p>
                    <p className='reducere'> 200 &#8364;</p>
                    <p className='price'>  160 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>Oricand doritii!!!</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={Arm} alt='Armenia' />
                <div className='detalii'>
                    <p className='point'>Armenia</p>
                    <p className='reducere'> 250 &#8364;</p>
                    <p className='price'>  200 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>Oricand doritii!!!</p>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Mountain;