import NavBar from "./NavBar";
import { AiFillSetting } from "react-icons/ai";
import { FaCode, FaWandMagicSparkles, FaChartLine } from "react-icons/fa6";

const AboutMe = () => {
    return ( 
        <main className="relative ml-0 xl:ml-[26%] xl:right-0 w-full xl:w-[75%] bg-eerie-black rounded-lg border border-jet border-solid p-5 flex flex-col gap-10 mt-10 xl:mt-0 pb-10 xl-mb-10 mb-20 xl-mb-5">
            <NavBar />
            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-litewhite">About Me</h1>
                    <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full"></div>
                </div>
                <p className="text-[13px] md:text-[15px] text-justify text-litewhite">I am a Software Engineer - Frontend, a programming enthusiast with 2years working experience in Frontend development and an open source contributor eager to contribute to team success through hard work, reliability, innovative ideas, and excellent organizational skills. I can provide reuseable clean codes and pixel perfect web designs. I also make the website responsive and more interactive with web animations. A responsive design makes my website accessible to all users, regardless of their device. I'm also a UI/UX designer specialized in creating exceptional user experiences that blend aesthetics with functionality. With a keen eye for detail and a deep understanding of user-centered design principles, I strive to craft good and visually appealing digital products.</p>
            </section>

            <section className="grid gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-litewhite">What I Do!?</h1>
                    <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-jet border-solid bg-smoky-black">
                        <AiFillSetting className="text-3xl text-vegas-gold font-medium"/>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-lg md:text-xl text-litewhite font-bold">Software Engineering</h1>
                            <p className="text-[13px] md:text-[15px] text-litewhite">I specialize in crafting dynamic, cutting-edge Single-Page Applications (SPAs) using the latest technologies. With a strong focus on React, NextJS, and Typescript, I create engaging web experiences that are not only visually stunning but also highly functional, responsive and interactive with optimal performance.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-jet border-solid bg-smoky-black">
                        <FaCode className="text-3xl text-vegas-gold font-medium"/>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-lg md:text-xl text-litewhite font-bold">Web Development</h1>
                            <p className="text-[13px] md:text-[15px] text-litewhite">I can provide clean codes and pixel perfect web designs. I also make the website more and more interactively flawless as possible. Every website I develop is built with two primary goals: Firstly, I program it to work across all devices. Secondly, I design it to be fast and interactive as possible.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-jet border-solid bg-smoky-black">
                        <FaWandMagicSparkles className="text-3xl text-vegas-gold font-medium"/>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-lg md:text-xl text-litewhite font-bold">UI/UX Designing</h1>
                            <p className="text-[13px] md:text-[15px] text-litewhite">I possess a diverse skill set that allows me to tackle various aspects of the design process. From conducting user research and creating wireframes to designing high-fidelity mockups and interactive prototypes. I am proficient in using Figma, enabling me to create pixel-perfect designs that are ready for development.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-jet border-solid bg-smoky-black">
                        <FaChartLine className="text-3xl text-vegas-gold font-medium"/>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-lg md:text-xl text-litewhite font-bold">Web Optimization</h1>
                            <p className="text-[13px] md:text-[15px] text-litewhite">I possess a diverse skill set that allows me to tackle various aspects of the design process. From conducting user research and creating wireframes to designing high-fidelity mockups and interactive prototypes. I am proficient in using Figma, enabling me to create pixel-perfect designs that are ready for development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default AboutMe;