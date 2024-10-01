// import { useEffect } from "react";
// import { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function fetchImages(getUrl) {
//     try {
//       setLoading(true);
//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const data = await response.json();

//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       setError(e.message);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (url !== "") fetchImages(url);
//   }, [url]);

//   console.log(images);

//   if (loading) {
//     return (
//       <div className="grid place-items-center h-[80vh] text-2xl font-bold">
//         Loading...
//       </div>
//     );
//   }

//   if (error !== null) {
//     return (
//       <div className="grid place-items-center h-[80vh] text-2xl font-bold">
//         An error occured: {error}
//       </div>
//     );
//   }

//   function handlePrevious() {
//     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
//   }
//   function handleNext() {
//     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
//   }

//   return (
//     <div className="relative flex flex-col justify-center items-center w-[100vw] h-[60vh] lg:mt-[10em]">
//       <BsArrowLeftCircleFill
//         onClick={handlePrevious}
//         className="absolute w-[2em] aspect-square text-white left-[20vw] text-2xl sm:text-[3em]"
//       />
//       {images && images.length
//         ? images.map((imageItem, index) => (
//             <img
//               key={imageItem.id}
//               src={imageItem.download_url}
//               alt={imageItem.download_url}
//               className={
//                 currentSlide === index
//                   ? "w-[70vw] h-[28vh] sm:h-[35vh] sm:w-[73vw] lg:h-[80vh] lg:w-[75vw]"
//                   : "hidden"
//               }
//             />
//           ))
//         : null}
//       <BsArrowRightCircleFill
//         onClick={handleNext}
//         className="absolute w-[2em] aspect-square text-white right-[20vw] text-2xl sm:text-[3em]"
//       />
//       <span className="flex relative bottom-[1em]">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button
//                 key={index}
//                 className={
//                   currentSlide === index
//                     ? "bg-white h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
//                     : "bg-gray-400 border-none h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
//                 }
//                 onClick={() => setCurrentSlide(index)}
//               ></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// }

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, [url, limit, page]);

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [fetchImages, url]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const renderedImages = useMemo(() => {
    return images.map((imageItem, index) => (
      <img
        key={imageItem.id}
        src={imageItem.download_url}
        alt={imageItem.author}
        className={
          currentIndex === index
            ? "w-[70vw] h-[28vh] sm:h-[35vh] sm:w-[73vw] lg:h-[80vh] lg:w-[75vw] opacity-100 transition-opacity duration-300"
            : "hidden"
        }
        loading={index === currentIndex ? "eager" : "lazy"}
      />
    ));
  }, [images, currentIndex]);

  if (loading) {
    return <div className="grid place-items-center h-[80vh] text-2xl font-bold">Loading...</div>;
  }

  if (error !== null) {
    return <div className="grid place-items-center h-[80vh] text-2xl font-bold">An error occurred: {error}</div>;
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-[100vw] h-[60vh] lg:mt-[10em]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-[2em] aspect-square text-white left-[20vw] text-2xl sm:text-[3em] cursor-pointer"
      />
      {renderedImages}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-[2em] aspect-square text-white right-[20vw] text-2xl sm:text-[3em] cursor-pointer"
      />
      <span className="flex relative bottom-[1em]">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              currentIndex === index
                ? "bg-white h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
                : "bg-gray-400 border-none h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
            }
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default React.memo(ImageSlider);