import NavBar from "./NavBar";
import WhatIDo from "./WhatIDo";
import Skills from "./Skills";
import WordsonMarble from "./WordsOnMarble";
import Loader from "./Loader";
import React, { useEffect, useState } from 'react';

const AboutMe = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or any asynchronous operation
        const fetchData = async () => {
            // Assume fetching takes 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <main className="relative ml-0 xl:ml-[26%] xl:right-0 w-full xl:w-[74%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-10 mt-5 xl:mt-0 pb-10 xl:mb-0 mb-[4rem] overflow-hidden">
            <NavBar />

            {loading ? (
                <Loader />
            ) : (
                <section>
                    <section className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">About Me</h1>
                            <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                        </div>
                        <p className="text-[13px] md:text-[15px] text-justify text-litewhite" data-aos="fade-down">I am a Software Engineer - Frontend, a programming enthusiast with 2years working experience in Frontend development and an open source contributor eager to contribute to team success through hard work, reliability, innovative ideas, and excellent organizational skills. I can provide reuseable clean codes and pixel perfect web designs. I also make the website responsive and more interactive with web animations. A responsive design makes my website accessible to all users, regardless of their device. I&apos;m also a UI/UX designer specialized in creating exceptional user experiences that blend aesthetics with functionality. With a keen eye for detail and a deep understanding of user-centered design principles, I strive to craft good and visually appealing digital products.</p>
                    </section>

                    <WhatIDo />

                    <Skills />

                    <WordsonMarble />
                </section>
            )}
        </main>
    );
}

export default AboutMe;