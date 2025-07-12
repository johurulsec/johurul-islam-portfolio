"use client"
import {BsArrowDown, BsArrowDownLeft, BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
 import { easeIn, motion } from "framer-motion";
const Service = () => {
  const services=[
    {
      num:'01',
      title:"Web Development",
      description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet, iusto harum aperiam maxime mollitia a vitae",
      href:""
    },
     {
      num:'02',
      title:"Web Development",
      description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet, iusto harum aperiam maxime mollitia a vitae",
      href:""
    },
     {
      num:'03',
      title:"Custom Development",
      description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet, iusto harum aperiam maxime mollitia a vitae",
      href:""
    },
     {
      num:'04',
      title:"IT Support",
      description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet, iusto harum aperiam maxime mollitia a vitae",
      href:""
    },

   
  ]
 
  return (
    <section className="min-h-[80vh]flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
     <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.4,duration:0.4,ease:easeIn}}}>
      {
        services.map((service,index)=>{
          return (
            <div key={index} className="mx-auto pl-4 md:pl-2">
             <div className="flex justify-between items-center">
               <div className="text-5xl text-outline text-transparent hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
              <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
             </div>
            <h2 className="text-[42px] font-bold  text-white hover:text-accent transition-all duration-500 ">{service.title}</h2>
            <p className="text-white/80 text-[20px]">{service.description}</p>
            </div>
          )
        })
      }
     </motion.div>
      </div>
    </section>
  )
};

export default Service;
