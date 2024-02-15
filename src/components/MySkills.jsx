import React from 'react'
import SkillSection from './common/SkillSection'
import commerce from '../yt-react-portfolio-tony-stark-assets/commerce.png'
import research from '../yt-react-portfolio-tony-stark-assets/research.png'
import web from '../yt-react-portfolio-tony-stark-assets/web.png'
import mobile from '../yt-react-portfolio-tony-stark-assets/mobile.png'

function MySkills() {
    const services=[
        {
            id:1,
            image:commerce,
            title:"E Commerce Website"
        },
        {
            id:2,
            image:web,
            title:"web Developement"
        },
        {
            id:3,
            image:mobile,
            title:"mobile first websites"
        },
        {
            id:4,
            image:research,
            title:"continuous learning"
        },

    ]
  return (
    <SkillSection title='Skills ' subtitle='Here are all my skills i aquired by building various projects. 
    I hope these are the skills you are looking for . If you find something missing please let me know' children='fgasdfgag'
    
    
    >
        <div className='grid gap-10 lg:grid-cols-2'>
            {
                services.map(({id,image,title})=>(
                    <div key={id} className='flex flex-col items-center justify-center p-5 shadow-sm dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110' >
                        <img src={image} alt="title" className='w-36 h-36 md:w-44 md:h-44' />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))
            }
        </div>


    </SkillSection>

  )
}

export default MySkills
