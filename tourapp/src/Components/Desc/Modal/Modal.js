import React, { useState } from 'react'
import  './Modal.css'

function Send(){
    let name = document.querySelector('.text').value 
    let sur  = document.querySelector('.surname').value
    let phone = document.querySelector('.phone').value
    let email = document.querySelector('.email').value
    let text  = document.querySelector('.textarea').value

    console.log(name);
    console.log(sur);
    console.log(phone);
    console.log(email);
    console.log(text);

     setTimeout(() =>{
        alert('the data was sent successfully')
    },2000)
    
}
const Modal  = props  =>{
    const [email,setEmail] = useState('')
    const [emailDirty,setEmailDirty] = useState(false)
    const [emailError,setEmailError] = useState('Email cannot be empty ')

    const emailhandler = (e) =>{
        setEmail(e.target.value)
            const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(String(e.target.value).toLocaleLowerCase())){
                setEmailError("Incorect email")
            }else{
                setEmailError('')
            }
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'email': setEmailDirty(true);
            break;
       }
    }



    if(!props.show){
        return null
    }

    return(
    <div className='modal' onClick={props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h4 className='modal-title'>Inscrietiva la o calatorie</h4>
                <span className="close" onClick={props.onClose}>&times;</span>
            </div>
            <div className='modal-body'>

            <form>
                <h5>Name</h5>
                <input type="text"  className="text" /><br /><br />
                <h5>Surname</h5>
                <input type="text"  className="surname"/><br /><br />

                <h5>Phone Number</h5>
                 <input type='number' className='phone' /><br /><br />

                <h5>Email</h5>
                {(emailDirty && emailError) && <div style={{color: `red`}}>{emailError}</div>}
                <input
                name='email' 
                value={email}
                onChange={e => emailhandler(e)}
                onBlur={e => blurHandler(e)} 
                 type="text"  className="email"
                 /><br /><br />

                <h5>Location</h5>
                <textarea className="textarea"></textarea>
            </form>

            </div>
            <div className='modal-footer'>
                <button className="b1" onClick={Send}>Send Date</button>
            </div>
        </div>
    </div>

    )
}
export default Modal;