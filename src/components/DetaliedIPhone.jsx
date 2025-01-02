import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {explore1Img , explore2Img ,chipImg,frameImg,exploreVideo} from '../utils'

const DetaliedIPhone = () => {
    // ################# start useState & use ref 
    const videoOfExplore = useRef()
    const imgeOfExplore1 = useRef()
    const imgeOfExplore2 = useRef()
    const text1 = useRef()
    const text2 = useRef()
    // ################# end useState & use ref 

    // ################# start logic 

    // ################# end logic 

    // ################# start animation 
    useEffect(() => {
        gsap.to('.text' , {
            opacity:1 ,
            // y:0,
            duration:10,
            scrollTrigger: {
                trigger:".text" ,
                toggleActions: "restart none none none",
            },
        })
    },[])
    useEffect(() => {
        gsap.to('#ExploreVideo' , {
            scrollTrigger: {
                trigger:"#ExploreVideo" ,
                toggleActions: "restart none none none",
            },
            onComplete: () => {
                videoOfExplore.current.play()
                }
        })
    },[])
    useEffect(() => {
        gsap.to('#imgeOfExplore1' , {
            scale:0.9,
            opacity:1 ,
            duration:5 ,
            scrollTrigger: {
                trigger:"#imgeOfExplore1" ,
                toggleActions: "restart none none none",
            },
        })
    },[])
    useEffect(() => {
        gsap.to('#imgeOfExplore2' , {
            scale:0.9 ,
            
            opacity:1 ,
            duration:5 ,
            scrollTrigger: {
                trigger:"#imgeOfExplore2" ,
                toggleActions: "restart none none none",
            },
        })
    },[])
    useEffect(() => {
        gsap.to('.text1' , {
            opacity:1 ,
            delay:2 ,
            scrollTrigger: {
                trigger:"#text1" ,
                toggleActions: "restart none none none",
            },
        })
    },[])

    // ################# end animation 
  return (
    <section className=' pb-8 bg-[#101010] pt-10'>
        <div className='w-[80%] mx-auto max-w-[1000px]'> 
            {/* ############### */}
            <div>
                <h1 className='text opacity-0  text-gray-100 mb-10' style={{fontSize: '40px' }}>
                    Explore the full story.
                </h1>
            </div>
            {/* ############### */}
            <div className='flex flex-col items-center'>
                <h1 className='text flex flex-col items-center opacity-0  mb-5' style={{fontSize: '25px' , fontWeight:'bold'}}> 
                    <span className='block'>IPhone.</span>Forged in titanium
                </h1>
                <video  src={exploreVideo}
                        id='ExploreVideo'
                        ref={videoOfExplore}
                        >
                </video>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
                <div className=' overflow-hidden flex justify-center items-center md:max-h-[300px] max-h-[230px]' >
                    <img className='opacity-[0.5] flex-1 max-w-[600px]  relative top-[35px] '  style={{ transform: 'scale(1.2)' }} src={explore1Img}  id='imgeOfExplore1' ref={imgeOfExplore1} alt="explore1Img" />
                </div>
                <div className=' overflow-hidden flex justify-center items-center md:max-h-[300px] max-h-[230px] scal-[0.8]'>
                    <img className='opacity-[0.5] flex-1 max-w-[600px] scale-[0.8] relative top-[30px]'  style={{ transform: 'scale(1.2)' }} src={explore2Img}  id='imgeOfExplore2' ref={imgeOfExplore2} alt="explore1Img" />
                </div>
            </div>
            {/* ############### */}
            <div className='flex justify-evenly flex-col md:flex-row my-3  gap-5'>
                <p className='flex md:flex-1 max-w-[500px] md:py-0 py-5  opacity-0 text1 border rounded-[20px] border-gray-300 px-5' ref={text1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat illo aspernatur impedit magni veritatis officiis ut, at neque quas porro molestiae recusandae, mollitia quam odit, temporibus consequatur non alias dolorum!</p>
                <p className='flex md:flex-1 max-w-[500px] opacity-0 text1 border rounded-[20px] border-gray-300 px-5 py-5' ref={text2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat illo aspernatur impedit magni veritatis officiis ut, at neque quas porro molestiae recusandae, mollitia quam odit, temporibus consequatur non alias dolorum!</p>
            </div>
            {/* ############### */}
        </div>
    </section>
  )
}

export default DetaliedIPhone