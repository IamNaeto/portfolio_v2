import { AiFillSetting } from "react-icons/ai";
import { FaCode, FaWandMagicSparkles, FaChartLine } from "react-icons/fa6";

const WhatIDo = () => {
    return (
        <main className="grid gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-litewhite">What I Do!?</h1>
                <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black">
                    <AiFillSetting className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Software Engineering</h1>
                        <p className="text-[13px] md:text-[15px] text-litewhite">I specialize in crafting dynamic, cutting-edge Single-Page Applications (SPAs) using the latest technologies. With a strong focus on React, NextJS, and Typescript, I create engaging web experiences that are not only visually stunning but also highly functional, responsive and interactive with optimal performance.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black">
                    <FaCode className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Web Development</h1>
                        <p className="text-[13px] md:text-[15px] text-litewhite">I can provide clean codes and pixel perfect web designs. I also make the website more and more interactive and responsive. Every website I develop is built with two primary goals: Firstly, I program it to work across all devices. Secondly, I design it to be fast and interactive as possible.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black">
                    <FaWandMagicSparkles className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">UI/UX Designing</h1>
                        <p className="text-[13px] md:text-[15px] text-litewhite">I possess a diverse skill set that allows me to tackle various aspects of the design process. From conducting user research and creating wireframes to designing high-fidelity mockups and interactive prototypes. I am proficient in using Figma, enabling me to create pixel-perfect designs that are ready for development.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black">
                    <FaChartLine className="text-3xl text-vegas-gold font-medium" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-lg md:text-xl text-litewhite font-bold">Search Engine Optimization</h1>
                        <p className="text-[13px] md:text-[15px] text-litewhite">SEO is a strategic and dynamic process that involves a comprehensive approach to enhancing a website's online presence. When I optimize a website for search engines, I engage in a thorough analysis of its structure, content, and performance. This involves refining the website's code, improving its loading speed, and ensuring it is mobile-friendly.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WhatIDo;