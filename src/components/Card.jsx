import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' w-52 relative bg-zinc-900/90 rounded-[30px] py-5 px-7 h-64 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-4 font-semibold leading-tight text-sm'>{data.desc}</p>
        <div className='footer absolute w-full   bottom-0 left-0'>
            <div className='text-white flex items-center justify-between px-6 py-5'>
                <p>{data.filesize}</p>
                <span className='bg-sky-200 p-1 rounded-full text-black'>
                {data.close ? <AiOutlineDownload /> : <IoCloseOutline />}
                
                </span>
            </div>
            {
                data.tagdetails.isOpen && <div className={`tag w-full py-3 ${data.tagdetails.tagColor === 'blue' ?  'bg-blue-600' : 'bg-green-600' } flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tagdetails.tagTitle}</h3>
            </div>
            }
            
        </div>
    </motion.div>
  )
}

export default Card