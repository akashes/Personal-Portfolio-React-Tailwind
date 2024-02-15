import React from 'react'
import {FaTwitter,FaFastBackward,FaLinkedin,FaArrowDown, FaFacebook} from 'react-icons/fa'
import avatar from '../yt-react-portfolio-tony-stark-assets/avatar.png'
import { Fragment } from 'react'
import { useEffect } from 'react'
import Typed from 'typed.js'
import './Hero.css'
import Timeline from './Timeline'
function Hero() {

  const events=[
    {
        heading:"SSLC",
        period:'2017',
        subHeading:"Mother Theresa School Muhamma,Alappuzha",
        direction:"right"
    },
    {
        heading:"Higher Secondary",
        period:'2019',
        subHeading:"SNDP School nadakkavu, Thrippunithura",
        direction:"left"
    },
    {
        heading:"BCA",
        period:'2022',
        subHeading:"SNGM College Thuravoor , Alappuzha",
        direction:"right"
    },
    {
        heading:"ME(A)RN Stack",
        period:'present',
        subHeading:"Luminar Technolab, Kochi",

        direction:"left"
    },
]
    window.addEventListener('scroll',function(){
        const downloadArrow =document.querySelector('.download-arrow')
        if(this.scrollY >=90) downloadArrow.classList.add("hide-down-arrow")
        else downloadArrow.classList.remove('hide-down-arrow')
    })

    
    const SOCIAL =[
        {
            id:1,
            link:"https://twitter.com",
            icon:<FaTwitter/>
        },
        {
            id:2,
            link:"https://facebook.com",
            icon:<FaFacebook/>
        },
        {
            id:3,
            link:"https://linkedin.com",
            icon:<FaLinkedin/>
        }
    ]
    useEffect(() => {
        // Options for Typed.js
        const options = {
          strings: ['MEARN  '],
          typeSpeed: 120,
          backSpeed: 120,
          loop: true,
        };
    
        // Initialize Typed.js
        const typed = new Typed('#typed-text', options);
    
        // Cleanup on component unmount
        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <div id='home'>
      <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'> 
    <p className='text-2xl text-gray-500'>Hi There !</p>
    <p className='text-gray-500 '>I AM</p>
        <h2 className='text-5xl text-rose-600  uppercase font-bold mb-8'>Akash e s </h2>
        <div>
        <span className='py-3 text-4xl ' id='typed-text'></span> <span className='text-4xl ps-2'>Developer !</span>

        </div>
        <p className='max-w-xl font-light text-gray-900 dark:text-white'>Hello <span className='animate-pulse text-4xl' > 👋</span>
Greetings! I'm Akash ES, a passionate MEARN stack developer With expertise in MongoDB, Express.js, Angular,React and Node.js, I specialize in transforming complex concepts into dynamic and efficient web solutions.      </p>
        


            <div className='flex  py-8 lg:py-16 justify-evenly text-3xl w-full md:w-1/3'>
               {
                 SOCIAL.map(({id,link,icon})=>(
                    <a target='_blank' rel='noopener noreferrer' className='cursor-pointer duration-300-hover hover:text-rose-600 ' href={link} key={id}>{icon}</a>


                )
                    

                    
                )
               }
            </div>


            {/* photo and resume */}
            <div>
              {/* <img src={avatar} alt="avatar" className='pt-5 w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-xl bg-gradient-to-b from-rose-600 ' /> */}
            <a href='/Akash-Resume.pdf' className=' hover:shadow-2xl hover:scale-105 transition duration-200 ease-in-out  w-60  flex flex-center justify-center mt-10 bg-gradient-to-r from-red-500 to-orange-500  rounded-lg text-white py-2' download={true}>Resume </a>
            <a href='https://www.linkedin.com/in/akash-es-a3a174239/' target='_blank' className=' hover:shadow-2xl hover:scale-105 transition duration-200 ease-in-out flex flex-center justify-center mt-10 bg-gradient-to-r   from-slate-500 to-slate-800 rounded-lg text-white py-2' download={true}>Hire Me </a>
      
            </div> 


            <div className='mt-10 download-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
            </div>


            <Timeline  events={events} />


    </section>
    </div>
  )
}

export default Hero
