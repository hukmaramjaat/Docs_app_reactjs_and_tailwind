import React, { useRef, useState } from 'react'
import Card from './Card'

function ForGround() {
    const ref = useRef(null)
    const data = [
        {
            desc: "Tailwind CSS works by scanning all of your HTML files",
            filesize: '.9MB',
            close: true,
            tagdetails: {
                isOpen: true,
                tagTitle: "DownLoad Now",
                tagColor: 'Green'
            }
        },
        {
            desc: "Framer Motion is a simple yet powerful motion library for React.",
            filesize: '95MB',
            close: false,
            tagdetails: {
                isOpen: true,
                tagTitle: "DownLoad Now",
                tagColor: 'blue'
            }
        },
        {
            desc: "JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
            filesize: '159MB',
            close: true,
            tagdetails: {
                isOpen: false,
                tagTitle: "DownLoad Now",
                tagColor: 'Green'
            }
        },
    ]
    // useState()
  return (
    <div>
        <div ref={ref} className="fixed top-0 left-0 w-full h-full flex gap-4 p-5 flex-wrap">
            {data.map((item,index) =>(
                <Card data ={item} reference={ref}/>
            ))}
        </div>
    </div>
  )
}

export default ForGround