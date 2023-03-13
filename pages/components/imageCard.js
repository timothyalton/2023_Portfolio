import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const ImageCard = (props) => {

  const [showButtons, setShowButtons ] = useState(false);

  const handleMouseOver = () => {
    setShowButtons(true)
    console.log(showButtons)
  }

  const handleMouseOut = () => {
    setShowButtons(false)
    console.log(props.tech)
  }

  return (
    <>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='group relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-xl'>
            <div className='h-96 w-72'>
              <Image 
                src={props.image}
                alt={props.title}
                width={384}
                height={288}
                className='max-w-full max-h-full w-full h-full object-cover' 

              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <div className=" bg-transparent font-burtons absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]">
              <h1 className='text-3xl font-bold text-white'>{props.title}</h1>
            </div>
            
            {showButtons && 
            <div className=" bg-transparent font-burtons absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all hover:bg-gradient-to-t from-black to-teal-500">
              <h1 className='text-3xl font-bold text-white'>{props.title}</h1>
              <p className='text-lg italic text-white pb-1'>{props.description}</p>
              <p className='text-teal-400 p-1'>Technologies Used</p>          
              {props.tech.map((item) => (
                <p className='text-xs pb-2 text-white'>{item}</p>
              ))}             
              <div className=' grid gap-4 grid-cols-2 grid-rows-1'>
                <a href={props.demo} target="_blank">
                <button className='rounded-full hover:text-black hover:bg-white hover:border-transparent bg-transparent border border-white p-2 px-3.5 text-sm capitalize text-white'>
                  Demo
                </button>
                </a>
                <a href={props.code} target="_blank">
                <button className='rounded-full hover:text-black hover:bg-white hover:border-transparent bg-transparent border border-white p-2 px-3.5 text-sm capitalize text-white'>
                  Code
                </button>
                </a>
              </div>
            </div>
            }
          </div>
    </>
  );
}

export default ImageCard;
