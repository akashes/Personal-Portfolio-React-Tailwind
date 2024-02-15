import React, { Fragment } from 'react'
import SkillSection from './common/SkillSection'
import {FaGithub,FaExternalLinkSquareAlt} from 'react-icons/fa'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'



function Portfolio() {
    const projects = [
        {
            id:1,
            image:image1,
            title:"Restaurant Website",
            github:'https://github.com/akashes/BasicRestaurantWebsite-HTMLandCSS',
            demo:"https://restaurant-website-html-css.netlify.app/"
        },
        {
            id:1,
            image:image2,
            title:"VolksWagen Landing page",
            github:'https://github.com/akashes/volkswagenWebsiteLandingSection-HTML-CSS-JS-',
            demo:"https://volkswagen-landing-section.netlify.app/"
        },
        {
            id:1,
            image:image3,
            title:"React Movie Search App",
            github:'https://github.com/akashes/movieSearchApp-React',
            demo:"https://react-movie-search-akashes.netlify.app/"
        },
        {
            id:1,
            image:image4,
            title:"Video Manager App React",
            github:'https://github.com/akashes/Media-Player-FrontEnd',
            demo:"https://mediaplayer-akashes.netlify.app/"
        },
        {
            id:1,
            image:image5,
            title:"Weather App",
            github:'https://github.com/akashes/weatherAppReact',
            demo:"https://weather-app-new-one.netlify.app/"
        },
        {
            id:1,
            image:image6,
            title:"React ToDo App ",
            github:'https://github.com/nodejs/node',
            demo:"https://cerulean-sprinkles-30f137.netlify.app/"
        },
    ]
  return (
   <div id='projects'>
     <SkillSection title={"Featured Projects"} subtitle="Here are some of the projects i built . Some of them are created along the begginer journey as a webDeveloper . So go gently on them . ">


<div className="grid gap-8 lg:gap-14 lg:grid-col-2">
    {
       
      projects.map(({id,image,title,github,demo})=>(
       <>
        <div  key={id} className=' hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out max-w-lg flex shadow-sm shadow-gray-200 rounded-2xl overflow-hidden'><img className='w-3/4' src={image} alt="title" />
       <div className='w-1/4 flex flex-col items-center justify-evenly p-1'>
       <h2 className='font-bold text-teal-800' >{title} </h2>
        <a className='text-2xl cursor-pointer hover:scale-110 duration-150' target='_blank' href={github}><FaGithub/></a>
        <a className='text-2xl cursor-pointer hover:scale-110 duration-150' target='_blank' href={demo}><FaExternalLinkSquareAlt/></a>
       </div>
        </div>
       </>
      ))
       
       
            
        
    }
</div>
    </SkillSection>
    <div className='text-center'>
    <a href="https://www.linkedin.com/in/akash-es-a3a174239/recent-activity/all/" className=' px-4 py-2 rounded transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl  bg-gradient-to-r from-blue-500 to-teal-600 text-white'>More Projects</a>

    </div>
   </div>
   
  )
}

export default Portfolio
