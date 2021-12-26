import React from 'react'
import bra from './brazil.jpg'
import mex from './Cancun.jpg'
import Cuba from './Cuba.jpg'
import Dubai from './Dubai.jpg'
import Iceland from './Iceland.jpg'
import jpn from './Japonia.jpg'
import nor from './Norvegia.jpg'
import sue from './Suedia.jpg'

const Exotic = () =>{
    return(
        <div>
            <h1 className='Sea-Text'>The best Exotic Excursion </h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={bra} alt='Brazilia' />
                <div className='back-oferts'>
                    <a className='point'>Brazilia</a>
                    <p className='reducere'> 4500 &#8364;</p>
                    <p className='price'>  4230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={mex} alt='Mexico' />
                <div className='back-oferts'>
                    <a className='point'>Mexico</a>
                    <p className='reducere'> 3500 &#8364;</p>
                    <p className='price'>  3230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Cuba} alt='Cuba' />
                <div className='back-oferts'>
                    <a className='point'>Cuba</a>
                    <p className='reducere'> 3500 &#8364;</p>
                    <p className='price'>  3230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Dubai} alt='Dubai' />
                <div className='back-oferts'>
                    <a className='point'>Dubai</a>
                    <p className='reducere'> 1500 &#8364;</p>
                    <p className='price'>  1230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Iceland} alt='iceland' />
                <div className='back-oferts'>
                    <a className='point'>Iceland</a>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={jpn} alt='Japonia' />
                <div className='back-oferts'>
                    <a className='point'>Japonia</a>
                    <p className='reducere'> 4500 &#8364;</p>
                    <p className='price'>  4230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={nor} alt='Norvegia' />
                <div className='back-oferts'>
                    <a className='point'>Norvegia</a>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={sue} alt='Suedia' />
                <div className='back-oferts'>
                    <a className='point'>Suedia</a>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='date'>De pe data de 07.01.2022 - 15.01.2022</p>
                </div>
            </div>

        </div>    
        </div>
    )
}
export default Exotic;