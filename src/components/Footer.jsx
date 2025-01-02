import React from 'react'
import {footerLinks} from '../constants'

const Footer = () => {
return (
    <footer className='w-[80%] mx-auto max-w-[800px] mt-10 '>
        {/* ################################### */}
        <div className='flex flex-col gap-10 text-center md:flex-row-reverse md:justify-between md:px-0 px-2'>
            {/* ############ */}
            <div className='md:max-w-[50%]' >
                <p className='text-center'> 
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-stone-600">
                        best graphic performance by far.
                    </span>
                </p>
            </div>
            {/* ############ */}
            <div className='flex md:w-[50%] flex-col gap-3'>
                <p> Mobile {' '}
                    <span className="text-white">
                        games will look and feel so immersive
                    </span>,
                    with incredibly detailed environments and characters.
                </p>
                <div className="flex-1 flex justify-center flex-col g_fadeIn">
                    <p className="hiw-text">New</p>
                    <p className="hiw-bigtext">Pro-class GPU</p>
                    <p className="hiw-text">with 6 cores</p>
                </div>
            </div>
            {/* ############ */}
        </div>
            {/* ################################### */}
        <div className='flex mt-5 justify-between border-t-[1px] border-gray'>
            <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    More ways to shop: {' '}
                    <span className="underline text-blue">
                    Find an Apple Store {' '}
                    </span>
                    or {' '}
                    <span className="underline text-blue">
                    other retailer
                    </span>{' '}
                    near you.
                    </p>
                    <p className="font-semibold text-gray text-xs">
                    Or call 000800-040-1966
                </p>
            </div>

            <div className="bg-neutral-700 my-5 h-[1px] w-full" />

            <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
                <div className="flex">
                {footerLinks.map((link, i) => (
                    <p key={link} className="font-semibold text-gray text-xs">
                        {link}{' '}
                        {i !== footerLinks.length - 1 && (
                        <span className="mx-2"> | </span>
                    )}
                    </p>
                ))}
            </div>
            </div>
            </div>
        </div>
            {/* ################################### */}

    </footer>

)
}

export default Footer