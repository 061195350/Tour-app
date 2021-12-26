import React, {useState} from 'react';
import Modal from './Modal/Modal';
import './Text.css';

const Text = () => {
    const [show, setShow]  = useState(false)
    return(
        <div className='back'>
            <div className='container'>
                <div className='description'>
                    <h1 className='h1'>Sky Travel</h1>
                    <h3 className='h3'>Calatoreste alaturi de noi in orice colt al lumii la cele mai avantajoase preturi</h3>
                </div>

            <div className='message'>
                <div className="send-message">
                    <h3 id="myBtn" onClick={() => setShow(true) }>Ocupa un loc</h3>
                 </div> 
            </div>
            <Modal onClose={() => setShow(false) } show={show} />
        </div>
    </div>
    )
}
export default Text;