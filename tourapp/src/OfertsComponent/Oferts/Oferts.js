import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter';
import ContentFull from '../../ContentFull/ContentFull';
import MountainC from '../../MountainTours/MountainC';
import Excursii from '../Excursii/Excursii';
import Exotic from '../Exotic/Exotic';
import Maldive from '../Maldive/Maldive';


const Oferts = () =>{
    return(
        <BrowserRouter>
        <>
          <ContentFull />
          <MountainC />
          <Maldive />
          <Excursii />
          <Exotic />
        </>
        </BrowserRouter>
    )
}
export default Oferts;