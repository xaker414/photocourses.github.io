import React, { useState } from 'react'
import img21 from './photo2_1.jpg'
import img22 from './photo2_2.jpg'

export function Photos2(){
    const [displayedImg, setDisplayedImg] = useState(img21);

    const handleClick = () => {
        const newImg = (displayedImg === img21) ? img22 : img21;
        setDisplayedImg(newImg);
    }

    return(
        <div className='second3'>
            <img src={displayedImg} alt="img2" />
            <button className='button-891' onClick={handleClick}><p className='alo'>CLICK</p></button>
        </div>
    )
}
