import Image from "next/image";
import { HiOutlineMail, HiOutlineCloudDownload } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile, HiOutlineMapPin } from "react-icons/hi2";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import { useState } from 'react';

const ProfileBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      
    return (
        <aside className="relative xl:fixed w-full xl:w-[24%] bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet py-3 px-5 flex flex-col gap-4 mt-5 md:mt-0">
            <div className="flex flex-row xl:flex-col items-center justify-start xl:justify-center gap-2">
                <div className="w-[25%] xl:w-full flex items-center justify-center">
                    <Image src="/img/Naeto.jpg" width={200} height={200} alt="Charles O. Egesionu Image" className="w-full xl:w-[60%] rounded-xl" />
                </div>

                <div className="flex flex-col items-start xl:items-center gap-2">
                    <h1 className="text-litewhite text-xl md:text-[28px] font-bold text-center">Charles O. Egesionu</h1>

                    <h3 className="p-2 rounded-lg bg-smoky-gray text-litewhite text-[13px] md:text-[15px] text-center font-medium">Software Engineer - Frontend</h3>

                    <a href="" className="py-[6px] px-3 md:px-5 rounded-md text-smoky-black hover:text-vegas-gold bg-vegas-gold hover:bg-smoky-black hover:border-jet border border-solid text-[12px] md:text-[14px] font-bold transition-all delay-200 flex items-center justify-center">Resume <HiOutlineCloudDownload className="ml-1 animate-bounce"/> </a>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col gap-4`}>
                <div className="flex flex-col gap-2 items-start border-t-[2px] border-b-[2px] border-jet border-solid pt-3 pb-3 overflow-x-hidden">
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMail className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="">
                            <p className="text-gray text-[12px] font-bold">Email</p>
                            <h4 className="text-[11px] text-litewhite">egesionucharlesobimnaeto@gmail.com</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineDevicePhoneMobile className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <a href="">
                            <p className="text-gray text-[12px] font-bold">Phone</p>
                            <h4 className="text-[11px] text-litewhite">+2348147371491</h4>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <HiOutlineMapPin className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl md:text-3xl" />
                        <div>
                            <p className="text-gray text-[12px] font-bold">Location</p>
                            <h4 className="text-[11px] text-litewhite">Imo State, Nigeria</h4>
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-4">
                        <a href=""><FaGithub className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href=""><FaXTwitter className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href=""><FaLinkedinIn className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                        <a href=""><FaWhatsapp className="text-4xl md:text-3xl p-2 rounded-xl bg-smoky-black hover:bg-jet transition-all delay-200 border border-jet border-solid  text-litewhite hover:text-vegas-gold font-medium" /></a>
                    </div>
                </div>
            </div>

            {isMenuOpen ? 
            <MdOutlineKeyboardArrowUp className="absolute top-0 right-0 p-2 sm:p-3 text-4xl md:text-5xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tr-lg rounded-bl-lg shadow-sm shadow-vegas-gold flex xl:hidden cursor-pointer"
            onClick={toggleMenu}
            />
            :
            <MdOutlineKeyboardArrowDown className="absolute top-0 right-0 p-2 sm:p-3 text-4xl md:text-5xl text-vegas-gold bg-smoky-black hover:bg-jet rounded-tr-lg rounded-bl-lg shadow-sm shadow-vegas-gold flex xl:hidden cursor-pointer"
            onClick={toggleMenu}
            />
            }

        </aside>
    );
}

export default ProfileBar;