import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return (
      <div className="grid place-items-center h-[80vh] text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (error !== null) {
    return (
      <div className="grid place-items-center h-[80vh] text-2xl font-bold">
        An error occured: {error}
      </div>
    );
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-[100vw] h-[60vh] lg:mt-[10em]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-[2em] aspect-square text-white left-[20vw] text-2xl sm:text-[3em]"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "w-[70vw] h-[28vh] sm:h-[35vh] sm:w-[73vw] lg:h-[80vh] lg:w-[75vw]"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-[2em] aspect-square text-white right-[20vw] text-2xl sm:text-[3em]"
      />
      <span className="flex relative bottom-[1em]">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "bg-white h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
                    : "bg-gray-400 border-none h-[12px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
