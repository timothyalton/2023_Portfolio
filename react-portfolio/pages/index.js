import Head from 'next/head';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillBook, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import malton from "../public/malton_logo.png";
import design from "../public/design.png";
import fullstack from "../public/website_design.png";
// import resume from "../public/resume_malton.pdf";

export default function Home() {

  const [isHovering, setIsHovering] = useState('Resume');

  const onButtonClick = () => {
    fetch('resume_malton.pdf').then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume_malton.pdf';
        alink.click();
      })
    })
  }

  const handleMouseOver = () => {
    setIsHovering('Download')
  }

  const handleMouseOut = () => {
    setIsHovering('Resume')
  }

  return (
    <>
      <Head>
        <title>Mitchell Alton Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 font-burtons md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Mitchell Alton</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onButtonClick} className='bg-gradient-to-r from-cyan-500 to-black bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>{isHovering}</button></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mitchell Alton</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl'>
              Software Engineer, father, & husband. I'm a Tech enthusiast who loves problem solving.
              I attended a coding bootcamp, Flatiron School, where I learned the amazing world of coding. 
              I am highly motivated and am always open to new opportunities where I can utilize my skills 
              in the creation of meaningful software applications.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a className='hover:text-teal-600' href="https://www.linkedin.com/in/mitchell-alton"><AiFillLinkedin /></a>
            <a className='hover:text-teal-600' href="https://www.youtube.com/@mitchellalton402"><AiFillYoutube /></a>
            <a className='hover:text-teal-600' href="https://github.com/timothyalton"><AiFillGithub /></a>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20'>
            <Image className="rounded-full w-80 h-80" src={malton} fill="true" style="cover"/>
          </div>
        </section>

        <section>
          <div className=' text-center'>
            <h3 className="text-3xl py-5">Technical Skills & Services</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I have learned a wide variety of technical skills along my journey into the Tech world. 
              I specialize in building full stack web applications. I offer services such as <span className='text-teal-500'>freelance websites, full stack web applications, e-commerce,</span> etc.
            </p>
          </div>
          <div>
            <div className= 'text-center shadow-lg p-10 rounded-xl my-10'>
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2'>Website Design</h3>
              <p className='py-2'>
                Modern website designs built to suit your need. <br /> 
                I use the latest technologies
                to build beautiful static websites. 
              </p>
              <h4 className=' bg-gradient-to-bg-blend-hard-light py-4 text-teal-600'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/* <Image src={fullstack} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pt-8 pb-2'>Full Stack Web Applications</h3>
              <p className='py-2'>
                Powerful applications built to serve your needs. <br />
                I have worked on many full stack projects <br /> utilizing modern technologies. 
              </p>
              <h4 className=' bg-radient-to-r from-white via-black to-white py-4 text-teal-600'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>Ruby | Ruby on Rails</p>
              <p className='text-gray-800 py-1'>JavaScript | React.js/Next.js</p>
              <p className='text-gray-800 py-1'>CSS | TailwindCSS</p>
              <p className='text-gray-800 py-1'>SQL | PostgreSQL</p>
              <p className='text-gray-800 py-1'>Python | Django</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p>
              Since the beginning of my journey into the world of Software develpement,
              I have always had a passion for problem solving and have developed projects that have had meaning,
              and taught me a lot. Below are some of the projects that I have developed.
            </p>
          </div>
          <div>
            <div>
              <Image src={''}/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
