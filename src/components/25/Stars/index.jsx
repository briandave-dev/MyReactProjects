import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick (currentIndex) {
        setRating(currentIndex)
    }

    function handleHover (currentIndex) {
        setHover(currentIndex)
    }

    function handleLeave () {
        setHover(rating)
    }

  return (
    <div className="h-[60vh] flex items-center justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1

        return (
        <FaStar
        key={index}
        className={index <= (hover || rating) ? "text-yellow-300" : "text-black"}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleHover(index)}
        onMouseLeave={() => handleLeave()}
        size={40}
        />
        )
      })}
    </div>
  );
}