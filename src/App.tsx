import React from 'react';
import logo from './logo.png';
import { Header } from './components/Header';
import { Info } from './components/Info';
import './App.css';
import {Photos} from './components/photo';
import img2 from './between.png';
import { Photos2 } from './components/photo2';





function App() {
  return(
    <div>
      <div className='first'>
        <Header />
      </div>
      <div className='between1'>
        <img src={img2} alt="img" className='between'/>
      </div>
      <div className='second'>
        <Header />
      </div>
      <div className='first1'>
        <Info />
        <a href="https://xaker414.github.io/111.github.io/"><button className='button-80'><p className='more'>Discover more</p></button></a> 

      </div>
      <div className='second2'>
        <Info />
        <a href="https://xaker414.github.io/with.photos.github.io/"><button className='button-801'><p className='more'>Discover more</p></button></a> 
      </div>
      
      <div>
        <Photos />
      </div>
      <div className='slider'>
        <Photos2 />
      </div>
    </div>

  )
}

export default App;
