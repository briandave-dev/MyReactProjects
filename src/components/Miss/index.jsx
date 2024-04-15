import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./styles.css";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import miss1 from "./assets/miss1.jpg";
import miss2 from "./assets/miss2.jpg";
import miss3 from "./assets/miss3.jpg";
import miss4 from "./assets/miss4.jpg";

const Miss = () => {
  const [current, setCurrent] = useState(0);
  const mis = [
    {
      id: 1,
      name: "NLED CECILE MARCELLE",
      image: miss1,
      votes: 10000,
    },
    {
      id: 2,
      name: "Name 2",
      image: miss2,
      votes: 10000,
    },
    {
      id: 3,
      name: "Name 3",
      image: miss3,
      votes: 10000,
    },
    {
        id: 4,
        name: "Name 3",
        image: miss4,
        votes: 10000,
      },
  ];
  return (
    <>
      <div className="text-white">
        <nav className="flex justify-between p-4">
          <FaBars className="text-2xl" />
          <p className="mr-auto ml-auto text-sm font-semibold">
            People's <span className="text-[#f5e9a9]">Choice</span>
          </p>
        </nav>

        <div className="mt-5">
          <div className="grid place-items-center gap-2">
            <div
              style={{ backgroundImage: `url(${mis[current].image})` }}
              className="aspect-[3/4] h-[40vh] rounded-xl bg-center bg-cover duration-300"
            >
              {""}
              {/* <div className="bg-[#f5e9a9] h-[2.5vh] rounded-sm"></div> */}
            </div>
            <center className="mt-3">
              <p className="bg-gradient-to-r leading-[1.2] from-[#f5e9a9] to-[#906c33] text-transparent bg-clip-text text-[2.1em] px-4">
                {mis[current].name}
              </p>

              <p className="text-[#f5e9a9] font-bold text-2xl mt-2">
                {mis[current].votes} votes
              </p>
            </center>

            <center className="flex gap-8 mt-7">
              <div className="flex flex-col gap-1 items-start">
                <p>Numéro</p>
                <p>Age</p>
                <p>Profession</p>
              </div>
              <div className="grid place-items-center">
                <p className="font-semibold">{mis[current].id}</p>
              </div>
            </center>

            <center className="flex gap-7 mt-9">
              <img src={facebook} alt="Facebook logo" />
              <img src={insta} alt="Instagram logo" />
              <img src={twitter} alt="Twitter logo" />
            </center>
          </div>

          <div className="mt-10 mb-7">
            <div className="flex justify-between">
              <div className="w-5 h-5 shadow-2xl ml-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
              <center className="bg-gradient-to-r from-[#fdf491] to-[#906c33] text-transparent bg-clip-text">
                Meilleurs votes
              </center>
              <div className="w-5 h-5 shadow-2xl mr-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
            </div>
          </div>

          <div className="flex gap-3">
          {mis.map((miss) => (
              <div key={miss.id} className="mt-7 w-[400px] aspect-square bg-[#212020] overflow-x-scroll">
                <p className="">
                  {miss.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Miss;
