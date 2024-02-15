import React from 'react'
import SkillSection from './common/SkillSection'
import {FaTwitter,FaFastBackward,FaLinkedin,FaArrowDown, FaFacebook} from 'react-icons/fa'
import contact from '../yt-react-portfolio-tony-stark-assets/mobile.png'
function Contact() {
   

  return (
   <div id='contact'>
     
     <SkillSection  title={'contact' } subtitle={'These are the ways you can get in touch with me. Hope to hear from you soon '} >

<div  className=' flex flex-col items-center justify-center gap-8 text-center'>
        <div>
            <img className='w-32 h-32' src={contact} alt="contact-info" />
        </div>
        <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>
                I am open to talk regarding freelancing or full-time opportunities. Feel free to contact me using your preffered medium.
            </p>
        </div>
        <div className='flex w-full flex-col items-center gap-y-6 justify-evenly'>
    <div className='flex flex-col items-start'>
        <div className='flex gap-x-3'>
            <i class="fa-solid fa-location-dot"></i>
            <h2 className='text-gray-500 font-bold'>Address</h2>
        </div>
        <p>Ezhasserikkari </p>
        <p>Muttathipparambu</p>
        <p>Cherthala Alappuzha - 688527</p>
    </div>

    <div className='flex flex-col items-start'>
        <div className='flex gap-x-3'>
            <i class="fa-solid fa-envelope"></i> 
            <h2 className='text-gray-500 font-bold' >Mail Me</h2>
        </div>
        <a href="mailto:akashes5753279@gmail.com">akashes5753279@gmail.com</a>
    </div>

    <div className='flex flex-col items-start'>
        <div className='flex gap-x-3'>
            <i class="fa-solid fa-phone"></i>
            <h2 className='text-gray-500 font-bold'>Call me</h2>
        </div>
        <a href="tel:+9746779218">9746779218</a>
    </div>
</div>

     <div className="p-8 text-left w-full">
     <form  action="https://getform.io/f/3fb81292-d7cf-437b-a25f-4d6b9112d317" method='post'>
            <div className='gap-4 w-full'>
                <div className='flex flex-col '>
                    <label className='capitalize text-sm py-2 font-extralight' htmlFor="">name</label>
                    <input type="text " name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                </div>
                <div className='flex flex-col '>
                    <label className='capitalize text-sm py-2 font-extralight' htmlFor="">Phone</label>
                    <input type="text " name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                </div>
                <div className='flex flex-col '>
                    <label className='capitalize text-sm py-2 font-extralight' htmlFor="">email</label>
                    <input type="text " name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                </div>
                <div className='flex flex-col '>
                    <label className='capitalize text-sm py-2 font-extralight' htmlFor="">message</label>
                    <textarea name="message" id="" cols="30" rows="10"className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>

                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className=" hover:scale-105 transition duration-300  ease-in-out hover:shadow-xl my-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer">Send Message</button>
            </div>

            
        </form>
     </div>
    </div>
    </SkillSection>
 
   </div>
  
  )
}

export default Contact
