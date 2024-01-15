import Link from 'next/link'
import React from 'react'
import '../globals.css'

const page = () => {
    return (
        <div className='w-full h-16 bg-blue-500 flex items-center justify-center'>
            <ul className='flex items-center justify-center space-x-7 font-semibold'>
                <li>
                    <Link href="/homePage">Home</Link>
                </li>
                <li>
                    <Link href={"/brand"}>Brand</Link>
                </li>
                <li>
                    <a href="">Model</a>
                </li>
                <li>
                    <a href="">Product</a>
                </li>
            </ul>
        </div>
    )
}

export default page