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
import email from "./phone.svg"

const Miss = () => {
  const [current, setCurrent] = useState(0);
  const mis = [
    {
      id: 1,
      name: "NLED CECILE MARCELLE",
      image: miss1,
      votes: 6137,
    },
    {
      id: 2,
      name: "OUM REBECCA GLADYS",
      image: miss2,
      votes: 8837,
    },
    {
      id: 3,
      name: "SEN NKWE ORLANDE DIKA",
      image: miss3,
      votes: 11881,
    },
    {
      id: 4,
      name: "UM FELICIA LAUREEN",
      image: miss4,
      votes: 10918,
    },
  ];

  const Switch = (slideIndex) => {
    setCurrent(slideIndex);
  };

  return (
    <>
      <div className="text-white">
        <nav className="flex justify-between p-4">
          <FaBars className="text-2xl" />
          <p className="mr-auto ml-auto text-sm">
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
              <p className="bg-gradient-to-r leading-[1.2] from-[#f5e9a9] to-[#906c33] text-transparent bg-clip-text text-[2.1em] px-10">
                {mis[current].name}
              </p>

              <p className="text-[#f5e9a9] font-bold text-[1.4em] mt-2 font-face">
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

          <div className="mt-10 mb-5">
            <div className="flex justify-between">
              <div className="w-5 h-5 shadow-2xl ml-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
              <center className="bg-gradient-to-r from-[#fdf491] to-[#906c33] text-transparent bg-clip-text">
                Meilleurs votes
              </center>
              <div className="w-5 h-5 shadow-2xl mr-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
            </div>
          </div>
        </div>
        <center className="flex gap-3 px-3 overflow-x-scroll">
          {mis.map((miss, index) => (
            <center
              key={index}
              onClick={() => Switch(index)}
              className="mt-5 w-[32vh] py-4 flex-shrink-0 aspect-square bg-[#212020] flex flex-col justify-center items-center gap-2 rounded-lg"
            >
              <div
                style={{ backgroundImage: `url(${miss.image})` }}
                className="aspect-square w-[61%] rounded-full bg-center bg-cover duration-300 mt-2"
              >
                {""}
              </div>
              <center className="px-[3em]">{miss.name}</center>
              <center className="text-gray-300">{miss.votes} votes</center>
            </center>
          ))}
        </center>

        <div className="mt-10 mb-7">
            <div className="flex justify-between">
              <div className="w-5 h-5 shadow-2xl ml-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
              <center className="bg-gradient-to-r from-[#fdf491] to-[#906c33] text-transparent bg-clip-text">
                Nos Partenaires
              </center>
              <div className="w-5 h-5 shadow-2xl mr-4 rounded-full bg-gradient-to-br from-[#f5e9a9] via-[#c0800f] to-[#8c4e06]"></div>
            </div>
          </div>

          <div className="grid place-items-center">
            <h1>Flemme</h1>
          </div>
          
          <div className="mt-5 bg-[#f5e9a9] h-[2.5vh] rounded-sm"></div>

          <div className="px-4 mt-6 flex-col flex gap-3">
            <h1 className="text-[#f5e9a9] text-2xl">A Propos</h1>
            <p className="text-2xl mt-2">People's choice est un concept qui permet à toute personne de voter pour sa candidate préférée en ligne et à tout moment.</p>
            <center className="flex gap-7 mt-2">
              <img src={facebook} alt="Facebook logo" />
              <img src={insta} alt="Instagram logo" />
              <img src={twitter} alt="Twitter logo" />
            </center>
          </div>

          <div className="mt-10 flex flex-col gap-2 px-4 text-2xl">
          <h1 className="text-[#f5e9a9] text-2xl">Liens utiles</h1>
            <p className="mt-3">A Propos</p>
            <p>Devenir partenaire</p>
            <p>Passer sa pub</p>
            <p>Termes et conditions</p>
            <p>FAQ</p>
          </div>

          <div className="mt-[3.2em] flex flex-col gap-2 px-4 text-2xl">
          <h1 className="text-[#f5e9a9] text-2xl">Liens utiles</h1>
            <p className="mt-3">Contacts</p>
            <p>Devenir partenaire</p>
            <p>Passer sa pub</p>
            <p>Termes et conditions</p>
            <p>FAQ</p>
          </div>

        <div className="mt-[10em]"></div>
      </div>
    </>
  );
};

export default Miss;
