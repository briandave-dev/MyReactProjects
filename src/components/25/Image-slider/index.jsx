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
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill
      size={40}
        onClick={handlePrevious}
        className="absolute w-[2em] aspect-square text-white left-[1em]"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "border border-black w-full h-full"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
      size={40}
        onClick={handleNext}
        className="absolute w-[2em] aspect-square text-white right-[1em]"
      />
      <span className="flex absolute bottom-[1em]">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "bg-white h-[15px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
                    : "bg-gray-400 border-none h-[15px] aspect-square rounded-[50%] cursor-pointer outline-none mx-[0.2em]"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
