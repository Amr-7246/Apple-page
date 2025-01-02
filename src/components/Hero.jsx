import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    // Animate the hero text on mount
    useEffect(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2.5,
        });
        gsap.to('#cta', {
            opacity: 1,
            delay: 2.5,
            y: 20,
        });
    }, []);

    // Handle window resize to update video source
    const handleWindowChange = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowChange);
        return () => {
            // Cleanup event listener on unmount
            window.removeEventListener('resize', handleWindowChange);
        };
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    iPhone 15
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        className="pointer-events-none"
                        autoPlay
                        muted
                        playsInline
                        src={videoSrc} // Update the src dynamically
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div  id='cta' className='flex translate-y-20 opacity-0 flex-col items-center'>
                    <a href="#HighLights" className='btn '>Buy</a>
                    <p className='font-normal text-xl'>From $199/month or $999</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
