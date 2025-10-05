import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx'
const home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
         <Navbar/>
         <Header/> 
    
    </div>
  );
}

export default home;
