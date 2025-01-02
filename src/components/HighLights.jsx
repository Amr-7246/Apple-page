import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const HighLights = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.section-heading' , {
      opacity: 1,
      y: 0,
    })
    gsap.to('.link' , {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.25
    })
  },[])
  return (
    <section  id='HighLights'
              className='w-screen overflow-hidden h-full bg-zinc'>
      <div className='md:flex mb-12 w-full items-end justify-between'>
        <h1 className='section-heading'>Get the HighLights . . </h1>
        <div className='flex flex-wrap items-end gap-5'>
          <p className='link'>
            Watch the film
            <img src={watchImg} alt="watchImg" className='ml-2' />
          </p>
          <p className='link'>
            Watch the event
            <img src={rightImg} alt="rightImg" className='ml-2' />
          </p>
        </div>
      </div>
      <VideoCarousel />
    </section>
  )
}

export default HighLights
