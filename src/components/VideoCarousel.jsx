import React, { useEffect, useRef ,useState } from 'react'
import { gsap } from 'gsap';
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils'
import { useGSAP } from '@gsap/react'

const VideoCarousel = () => {
    // #################### start useRef
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])
    
    // #################### start useState
    const [loadedData, setLoadedData] = useState([])
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    })
    const {isEnd,startPlay,videoId,isLastVideo,isPlaying} = video

    // #################### start animation  
    
    // #################### video trigger animat
    useEffect (() => {
        gsap.to(`.video${videoId}` , {
            scrollTrigger: {
                trigger: `.video${videoId}`,
                toggleActions : 'restart none none none'
            },
            onComplete: () => {
                setVideo((pre) => ({...pre , startPlay: true , isPlaying: true}))
            }
        })
    },[isEnd , videoId])
    // #################### slider animat
    useEffect (() => {
        gsap.to('#slider' , {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2 ,
            ease: 'power2.inOut'
        })
    },[isEnd , videoId])
    // #################### start span progress animat
    useEffect(() => {
        let currentProgress = 0
        let span = videoSpanRef.current

        if(span[videoId]){
            let anim = gsap.to(span[videoId] , {
                // ####################
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() *100)
                    if(progress !=currentProgress) {
                        currentProgress = progress
                                        // ####################

                        gsap.to(videoDivRef.current[videoId] , {
                            width: window.innerWidth < 720 ? '10vw' :
                            window.innerWidth < 1200 ? '10vw' : "4vw"
                        })
                                        // ####################

                        gsap.to(span[videoId] , {
                            width: `${currentProgress}%` ,
                            backgroundColor: 'white'
                        })
                                        // ####################

                    }
                },
                // ####################
                onComplete: () => {
                    if(isPlaying) {
                        gsap.to(videoDivRef.current[videoId] ,{
                            width: '12px'
                        })
                        gsap.to(span[videoId] ,{
                            backgroundColor: "#afafaf"
                        })
                    }
                }
            })
        // #################### end span progress animat
            if(videoId === 0) {
                anim.restart()
            }
            const animUpdate = () => {
                const videoElement = videoRef.current[videoId];
            
                if (videoElement && typeof videoElement.currentTime === "number") {
                    anim.progress(
                        videoElement.currentTime / hightlightsSlides[videoId].videoDuration
                    );
                } else {
                    console.error(`Invalid video reference or currentTime for videoId ${videoId}`);
                }
            };
            // const animUpdate = () => {
            //     const now = Date.now()
            //         anim.progress(videoRef.current[videoId].currentTime /
            //             hightlightsSlides[videoId].videoDuration)
            // }
            if(isPlaying) {
                gsap.ticker.add(animUpdate)
            } else {
                gsap.ticker.remove(animUpdate)
            }
        }
    },[isEnd , startPlay])
    // #################### end animation with GSAP ##### 

    // #################### start logic with JS ##### 
    // ####################
    const handleLoadedMetaData = (i , e) => {
        setLoadedData((pre) => [...pre ,e])
    }
    // #################### trigger point ####
    useEffect(() => {
        if(loadedData.length > 3) {
            if(!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay , videoId ,isPlaying ,loadedData])
    // ####################
    const handleProcess = (type ,i) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({...pre , isEnd : true, videoId : i + 1}))
                break;
            case 'video-last':
                setVideo((pre) => ({...pre , isLastVideo : true}))
                break;
            case 'video-reset':
                setVideo((pre) => ({...pre , isLastVideo : false , videoId : 0}))
                break;
            case 'play':
                setVideo((pre) => ({...pre , isPlaying : !pre.isPlaying}))
                break;        
            case 'pause':
                setVideo((pre) => ({...pre , isPlaying : !pre.isPlaying}))
                break;        
            default:
                return video;
            }
        }
        // console.log(videoId);
        // ####################
        // #################### end logic with JS ##### 

    return (
        <>
        {/* ################################################################# */}
            <div className='flex items-center'>
                {hightlightsSlides.map((list ,i ) => (
                    <div key={list.id} id='slider' >
                        {/* // #################### */}
                        <div className='video-carousel_container'>
                            <div className='w-full
                                            h-full 
                                            flex 
                                            flex-center 
                                            rounded-3xl
                                            overflow-hidden
                                            bg-black' >
                                <video  src={list.video}
                                        className = {`video${i}`}
                                        // id='video'
                                        playsInline
                                        preload='auto'
                                        muted
                                        ref={(e) => {
                                            videoRef.current[i] = e
                                        }}
                                        onEnded={() => 
                                            i !== 3 ?
                                            handleProcess('video-end', i): 
                                            handleProcess('video-last') 
                                        }
                                        onPlay={() => {
                                            setVideo((pre) => ({
                                                ...pre ,isPlaying: true
                                            }))
                                        }}
                                        onLoadedMetadata={(e) => 
                                            handleLoadedMetaData(i , e)
                                        }
                                        >
                                </video>
                            </div>
                        {/* // #################### */}
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text)=>(
                                    <p key={text} className='   md:text-2xl
                                                                text-2xl
                                                                font-medium'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ################################################################# */}
            <div className='relative flex-center mt-10'>
                <div className='flex-center 
                                py-5
                                px-7
                                bg-gray-300
                                backdrop-blur
                                rounded-full
                                '>
                    {videoRef.current.map(( _ , i ) => (
                        // #####################
                        <span   key={`div-${i}`}
                                ref={(e) => (videoDivRef.current[i] = e)}
                                className=' mx-2
                                            w-3 
                                            h-3
                                            bg-gray 
                                            rounded-full
                                            relative
                                            cursor-pointer'
                        >
                        {/* // ##################### */}
                            <span   key={`span-${i}`} 
                                    ref={(e) => (videoSpanRef.current[i] = e)}
                                    className=' w-full
                                                h-full 
                                                rounded-full
                                                absolute
                                                cursor-pointer'
                            />
                        </span>
                        // #####################
                    ))}
                </div>
            {/* ################################################################# */}
                <button className='control-btn'>
                    <img    src={   !isPlaying ? playImg :
                                    isLastVideo ? replayImg : pauseImg }
                            alt={   isPlaying ? "pauseImg" :
                                    isLastVideo ? "replayImg" : "playImg" }
                            onClick={
                                    isLastVideo ?   () => handleProcess('video-reset'):
                                    isPlaying ?    () => handleProcess('pause'):
                                                    () =>handleProcess('play')
                            }
                                    />
                </button>

            </div>
        </>
)
}

export default VideoCarousel