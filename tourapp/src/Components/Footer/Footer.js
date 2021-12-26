import React from 'react'
import './Footer.css'
import facebook from './facebook1.jpg'
import instagram  from './instagram1.jpg'
import twitter from './twitter1.jpg'
import location from './location.jpg'
import maps from './maps.jpg'
import call from './call.jpg'
import email from './email.jpg'
import youtube from './youtube1.jpg'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
            <div className='items-align'>

               <div className='icon-footer'>
               <img src={location} alt='location' />
               <p className='txt'>Orasul: Chisinau</p>
               </div><br></br>
               <div className='icon-footer'>
                <img src={maps} alt='maps'/>
               <p className='txt'>Adresa: str.Miron Costin 26/7</p>
               </div><br></br>
                <div className='icon-footer'>
                <img src={call} alt='phone' />
                <p className='txt'>06228975</p>
                </div><br></br>
               <div className='icon-footer'>
                <img src={email} alt='email' />
               <p className='txt'>SkyTravel@gmail.com</p>
             </div> 

               <div className='social-media'>
               <div className='icon-footer'>
                <img src={facebook} alt='faceebook'/>
                <p className='txt'> Sky_travel</p>
               </div><br></br>
               <div className='icon-footer'>
                <img src={instagram} alt='instagram'/>
                <p className='txt'> Sky_travel</p>
               </div><br></br>
               <div className='icon-footer'>
                <img src={twitter} alt='twitter'/>
                <p className='txt'> Sky_travel</p>
               </div><br></br>
               <div className='icon-footer'>
                <img src={youtube} alt='youtube'/>
                <p className='txt'> Skytravel</p>
               </div><br></br>
               </div>
               </div>
            </div>
        </div>
    )
}
export default Footer;