import React, { Fragment } from 'react'

function Timeline({events}) {

    //this array should be passed as props from the parent component
//   const events=[
//     {
//         heading:"SSLC",
//         period:'2017',
//         subHeading:"Mother Theresa School Muhamma,Alappuzha",
//         direction:"right"
//     },
//     {
//         heading:"Higher Secondary",
//         period:'2019',
//         subHeading:"SNDP School nadakkavu, Thrippunithura",
//         direction:"left"
//     },
//     {
//         heading:"BCA",
//         period:'2022',
//         subHeading:"SNGM College Thuravoor , Alappuzha",
//         direction:"right"
//     },
//     {
//         heading:"ME(A)RN Stack",
//         period:'present',
//         subHeading:"Luminar Technolab, Kochi",

//         direction:"left"
//     },
// ]

  return (
    <div id='about' className="flex flex-col gap-y-3 w-full my-4 mt-56">
        <Circle/>
      {
          events.map((event,key)=>{
          return  <Fragment key={key}>
                <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                    {event.direction === 'left' ? (
                        <EventCard heading={event.heading} subHeading={event.subHeading} period={event.period} /> 
                    )
                        : (
                            <div></div>
                        )
                    }
                    <Pillar/>
                    {event.direction === 'right' ? (
                        <EventCard heading={event.heading} subHeading={event.subHeading} period={event.period} /> 
                    )
                        : (
                            <div></div>
                        )
                    }

                </div>
                {key<(event.length-1) && <Circle/> }
            </Fragment>
          
            
          })
      }


        <Circle/>

    </div>
   
  )
}

const Circle=()=>{
    return(
        <div className="  bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4  mx-auto" ></div>
    )
}
const Pillar=()=>{
    return(
        <div className=" bg-gradient-to-b from-blue-500 to-teal-500   rounded-t-full rounded-b-full  w-2 h-full bg-blue-500 mx-auto" ></div>
    )
}
const EventCard=({heading,period,subHeading})=>{
    return(
        <div className=" transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
        <div className='text-blue-800 font-bold text-lg border-b dark:text-white'>{heading}</div>
        <div className='text-blue-800 font-bold   border-b dark:text-white'>{period}</div>
        <div className='text-sm text-gray-700 dark:text-white'>{subHeading}</div>
        </div>
    )
}

export default Timeline
