import React from 'react';

import './App.css';
import Profile from './pages/Profile'

import { Route,Routes} from "react-router-dom"

import HomePfe from './pages/HomePfe';
import NavbarPfe from './comp/NavbarPfe';

import Buy from './pages/Buy';

import PropertyDetails from'./pages/PropertyDetails'
import Rent from './pages/Rent';
import AddListing from './pages/AddListing';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
const NoMatch=()=>{
    return <div>Page not found</div>
}
return (
    <div className='Appcontainer'>
    <NavbarPfe/>
  
    <Routes>
     < Route path='/'  exact element={<HomePfe/> }></Route>
     <Route path = '/login' element={<Login/>}  />
      <Route path = '/signup' element={<Signup/>}  />
     <Route path='/ad/sale-homes' element ={<Buy/>}/>
     <Route path='/ad/sale-homes/:propertyCode' element ={<PropertyDetails/>}/>
     <Route path='/ad/rental-homes' element ={<Rent/>}/>
     <Route path='/ad/rental-homes/:propertyCode' element ={<PropertyDetails/>}/>
     <Route path='/user' element ={<Profile/>}>
     <Route path='profile' element ={<UserProfile/>}>
         </Route>

      <Route path='add-listing' element ={<AddListing/>}/>
    </Route>
    </Routes>
   
    </div>
)

}

export default App;
