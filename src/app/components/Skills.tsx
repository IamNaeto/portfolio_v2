import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript  } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiUnocss, SiFirebase, SiPostman, SiPython, SiNpm, SiYarn, SiCanva } from "react-icons/si";

const Skills = () => {
    return ( 
        <main className="grid gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-litewhite">Stacks and Frameworks</h1>
                <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaHtml5 className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">HTML</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaCss3Alt className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">CSS</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <IoLogoJavascript className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">JavaScript</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaBootstrap className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Bootstrap</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaSass className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">SASS</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaReact className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">React</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <TbBrandNextjs className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">NextJS</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiTypescript className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Typescript</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiTailwindcss className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">TailwindCSS</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiUnocss className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">UnoCSS</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiFirebase className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Firebase</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiPostman className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Postman</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiPython className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Python</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiNpm className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Npm</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiYarn className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Yarn</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <FaFigma className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Figma</h1>
               </div>

               <div className="flex items-center justify-center gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-4 md:p-6">
                    <SiCanva className="text-3xl text-vegas-gold"/>
                    <h1 className="text-litewhite text-sm md:text-lg font-bold">Canva</h1>
               </div>
            </div>
        </main>
     );
}
 
export default Skills;