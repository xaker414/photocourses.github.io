import React from 'react'
import img1 from './img.jpg'

export function Header(){
    return(
        <div className='sales_container'>
            <p className='small_header'>Bestselling Online Course Reveals…</p>
            <h1 className='sales_header'>How To Take Incredible iPhone Photos That Leave Everyone Speechless</h1>
            <img src={img1} alt='img' className='letter_header_img'/>
            <p className='letter_header'> From: Emil Pakarklis <br/> RE: <b>Taking Stunning Photos With Your iPhone</b> </p>
        </div>
    )
}