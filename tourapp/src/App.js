import React  from 'react' 
import './App.css';
import  'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header';
import AllComponents from './Components/AllComponts/AllComponents';
import Oferts from './OfertsComponent/Oferts/Oferts';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Exotic from './OfertsComponent/Exotic/Exotic';
import Excursii from './OfertsComponent/Excursii/Excursii';
 function App() {


  return (
  
   <BrowserRouter>
    <>
    <Header />
    <Route path='/oferts' component={Oferts} />
    <Route exact path='/' component={AllComponents} />
    <Route path='/exotic' component={Exotic} />
    <Route path='/excursii' component={Excursii} />
     <Footer />
    </>
  </BrowserRouter>
    
  )
}

export default App;
