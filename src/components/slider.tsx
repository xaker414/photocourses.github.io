// import React from 'react';
// import ImageSlider from 'react-compare-image';


// const ImageComparisonSlider = () => {
//   return (
//     <div className="image-comparison-slider-container">
//         <p>helo</p>
//       <ReactCompareImage
//         leftImage="./photo1_1.jpg"
//         rightImage="./photo1_1.jpg"
//         sliderLineColor="#FF00FF"
//         sliderLineWidth={3}
//         handle={<div className="image-comparison-slider-handle" />}
//       />
//     </div>
//   );
// };

// export default ImageComparisonSlider;
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="./photo1_1.jpg" srcSet="..." alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src="./photo1_1.jpg" srcSet="..." alt="Image two" />}
/>
