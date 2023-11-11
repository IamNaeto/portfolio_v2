import NavBar from "./NavBar";
import { FiBookOpen } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const MyJourney = () => {
    return (
        <main className="relative ml-0 xl:ml-[26%] xl:right-0 w-full xl:w-[74%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-10 mt-5 xl:mt-0 pb-10 xl:mb-0 mb-20 overflow-hidden">
            <NavBar />

            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-litewhite" data-aos="fade-down">My Journey</h1>
                    <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                </div>
                
                <div className="relative px-8 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Education</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Nnamdi Azikiwe University Awka, Nigeria</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Faculty of Basic Medical Sciences</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">Bachelor of Science, Anatomy</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2016 - 2021</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">ALX Africa Software Engineering Program</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Low-Level Programming & Algorithm, High-Level Programming, System Engineering & DevOps, Technical Writing and Networking</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">Full - Stack Software Engineer - Frontend</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2022 - 2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>

                <div className="relative px-8 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Internship Trainings</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">HNG Internship Training</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">React, NextJS, Typescript, TailwindCSS</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">HNGx Finalist - Frontend Developer Intern</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Andela React Learning Program</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">React, Webpack, Jest, Babel, Vite, NextJS</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">React Developer Intern</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Zuri Software Development Internship</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">HTML, CSS, JavaScript, Git, Github</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">Frontend Developer Intern</h4>
                        <p className="text-[13x] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Axia Africa Internship</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">HTML, CSS, JavaScript, Git, Github</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">Frontend Developer Intern</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Learnable Internship</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">HTML, CSS, JavaScript, Git, Github</h4>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-medium font-italic" data-aos="fade-down">Frontend Developer Intern</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2022</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>

                <div className="relative px-8 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Certifications</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Let's Upgrade</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Python Programming Essentials</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">JavaScript Programming Essentials</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">HTML/CSS Programming Essentials</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2022</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Great Learning</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Linux and Command Line</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Introduction to JavaScript</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Frontend Development - HTML, CSS, Git and Github</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2022</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Apt Learn</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Web Development Using HTML, CSS and Javascript</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Solo Learn</h3>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Responsive Web Design</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">HTML, CSS, JavaScript, jQuery</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">Game Development with JavaScript</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2021</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>

                <div className="relative px-8 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
                    <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">Working Experience</h1>
                    <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl"/>

                    <div className="relative grid gap-2">
                        <h3 className="text-[16px] md:text-[17px] text-litewhite font-bold" data-aos="fade-down">Upwork</h3>
                        <h4 className="text-[15px] md:text-[16px] text-litewhite font-italic" data-aos="fade-down">Freelancer (Frontend Developer)</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">- Specialize in building highly interactive web applications that captivate users. I create dynamic user interfaces with fluid transitions and animations that enhance user engagement</h4>
                        <h4 className="text-[13px] md:text-[15px] text-litewhite" data-aos="fade-down">- I stay up-to-date with the latest web development trends and technologies, ensuring that my clients receive the most current and innovative solutions</h4>
                        <p className="text-[13px] md:text-[15px] text-vegas-gold" data-aos="fade-down">2023 till date</p>

                        <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full"/>

                    </div>
                </div>
            </section>

        </main>
    );
}

export default MyJourney;