import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { 
  AiFillLinkedin, 
  AiFillGithub,
  AiFillInstagram} from 'react-icons/ai';
  import Image from "next/Image";
  import deved from '../public/dev-ed-wave.png';
  import design from '../public/design.png';
  import code from '../public/code.png';
  import consulting from '../public/consulting.png';
  import web1 from "../public/web1.png";
  import web2 from "../public/web2.png";
  import web3 from "../public/web3.png";
  import web4 from "../public/web4.png";
  import web5 from "../public/web5.png";
  import web6 from "../public/web6.png";
  import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kristian Saomi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:duration-300">
        <section className='min-h-screen py-10'>
      
        <nav className="py-10 mb-12 flex justify-between sticky top-10 z-50 bg-gradient-to-r from-cyan-500 to-teal-500 px-5 rounded shadow-xl	">
          <h1 className="text-xl font-burtons" > Developed by kris</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Kristian Saomi</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Im a junior java developer with allot of instress in front-end. Today i work as DevOps developer at Scania, im looking to extend my skills in react as fast as possible.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-650">
          <a className="hover:text-white hover:bg-teal-600 rounded-xl duration-300 p-1 dark:text-white" href="https://github.com/KristianSaomi"><AiFillGithub/></a>
          <a className="hover:text-white hover:bg-teal-600 rounded-xl duration-300 p-1 dark:text-white" href="https://www.linkedin.com/in/kristian-saomi-4a5024153/"><AiFillLinkedin/></a>
          <a className="hover:text-white hover:bg-teal-600 rounded-xl duration-300 p-1 dark:text-white" href="https://www.instagram.com/kristiansaomi/"><AiFillInstagram/></a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover"/>
        </div>
        <section>

          <div className=" mt-10">
            <h3 className="text-3xl py-1 dark:text-white">Services i offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> Since the beginning of my <span className="text-teal-500 ">journey </span> 
            as a developer, iv done everything <span className="text-teal-500 ">remote </span>...</p>
            
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> I offer <span className="text-teal-500">Backend </span> 
            services, but allso <span className="text-teal-500"> frontend </span></p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={design} width={100} height={100} className="mx-auto"/>
            <h3 className="te-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">Creating elegant designs suited for your needs design theoiry.</p>
            <h4 className="py-4 text-teal-600">Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            </div>

          
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={code} width={100} height={100} className="mx-auto"/>
            <h3 className="te-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">Creating elegant designs suited for your needs design theoiry.</p>
            <h4 className="py-4 text-teal-600">Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            </div>

        
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={consulting} width={100} height={100} className="mx-auto"/>
            <h3 className="te-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">Creating elegant designs suited for your needs design theoiry.</p>
            <h4 className="py-4 text-teal-600">Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white" >Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> Since the beginning of my <span className="text-teal-500">journey </span> 
            as a developer, iv done everything <span className="text-teal-500">remote </span>...</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>

          </div>
        </section>

        </section>
      </main>
    </div>
  )
}
