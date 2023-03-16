import React, { useState } from 'react'
import img11 from './photo1_1.jpg'
import img12 from './photo1_2.jpg'
import img21 from './photo2_1.jpg'
import img22 from './photo2_2.jpg'

export function Photos(){
    const [displayedImg, setDisplayedImg] = useState(img11);

    const handleClick = () => {
        const newImg = (displayedImg === img11) ? img12 : img11;
        setDisplayedImg(newImg);
    }

    return(
        <div className='second3'>
            <p className='example'>You can see photos creating by students after compliting the course:</p>
            <img src={displayedImg} alt="img1" className='img12'/>
            <button className='button-89' onClick={handleClick} ><p className='alo'>CLICK</p></button>
        </div>
    )
}
