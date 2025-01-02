import React ,{useEffect , useRef} from 'react'
import gsap from 'gsap'
import  '../CSS/ProChip.css'
import {frameImg, frameVideo ,chipImg} from '../utils'

const ProChip = () => {
    // ################# start useState & use ref 
    const VideoOfFrame = useRef()
    // ################# end useState & use ref 

    // ################# start logic 

    // ################# end logic 

    // ################# start animation 
    useEffect(() => {
        gsap.to('.animat-span-h1' , {
            opacity:1 ,
            top: 0,
            delay: 0.5,
            duration: 2,
            scrollTrigger: {
                trigger:".animat-span-h1" ,
                toggleActions: "restart none none none",
            },

        })
    },[])
    // $$$$$$$$$$$$$
    useEffect(() => {
        gsap.to('#VideoOfFrame' , {
            scrollTrigger: {
                trigger:"#VideoOfFrame" ,
                toggleActions: "restart none none none",
            },
            
            onComplete: () => {
                VideoOfFrame.current.play()
            }
        })
    },[])
    // $$$$$$$$$$$$$
    useEffect(() => {
        gsap.to('.chipImg-div' , {
            "--angle": "360deg", 
            // duration: 1,         
            // ease: "power1.inOut",
            scrollTrigger: {
                trigger:".chipImg-div" ,
                start:'top 80%',
                once:true
            },
        })
    },[])
    // ################# end animation 
  return (
    <section>
        <div  className='w-[80%] mx-auto max-w-[800px] pt-20' >
            {/* ############ chip */}
            <div className='flex items-center flex-col gap-5'>
                <div className='w-[50%] chipImg-div md:w-fit'>
                <img className='relative z-[2]' src={chipImg} alt="chipImg" />
                </div>
                <h1 className='text-[25px] font-bold text-center mt-[40px] mx-[20px] mb-[10px] '>
                    <span className='block relative top-[10px] opacity-0 animat-span-h1'>A17 Pro chip.</span> A monster win for gaming.
                </h1>
                <p className='mx-[20px] text-center text-stone-500'>
                    it`s here. The biggest redesign in the history of Apple GPUs. 
                </p>
            </div>
            {/* ############ video */}
            <div className='relative flex items-center flex-col mt-10 '>
                <img className='z-[2]' src={frameImg} alt="frameImg" />
                <video   className='w-[95%]  absolute top-3' 
                        style={{borderRadius:'21px' , top: '5%' }}
                        id='VideoOfFrame' 
                        ref={VideoOfFrame} 
                        src={frameVideo}>
                    
                </video>
                <p>Honkai: Star Rail</p>
            </div>
            {/* ############ */}
        </div>
    </section>
  )
}

export default ProChip