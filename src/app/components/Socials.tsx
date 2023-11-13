import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

const Socials = () => {
    return ( 
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col items-center justify-center gap-5 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <HiOutlineMail className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Email</p>
                    </div>
                    <a href="mailto:egesionucharlesobimnaeto@gmail.com" target="_blank">
                        <h4 className="text-[13px] md:text-[14px] text-litewhite hover:text-vegas-gold transition-all delay-200 font-medium">Send A Mail</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaWhatsapp className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">WhatsApp</p>
                    </div>
                    <a href="https://wa.me/2348178200220" target="_blank">
                        <h4 className="text-[13px] md:text-[14px] text-litewhite hover:text-vegas-gold transition-all delay-200 font-medium">Send A Message</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <FaPhoneVolume className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Phone</p>
                    </div>
                    <a href="tel:+2348147371491" target="_blank">
                        <h4 className="text-[13px] md:text-[14px] text-litewhite hover:text-vegas-gold transition-all delay-200 font-medium">Place A Call</h4>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid bg-smoky-black" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <HiOutlineMapPin className="p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-4xl" />
                        <p className="text-gray text-[15px] md:text-[16px] font-bold">Location</p>
                    </div>

                    <h4 className="text-[13px] md:text-[14px] text-litewhite transition-all delay-200 font-medium">Imo State, Nigeria</h4>
                </div>
        </main>
     );
}
 
export default Socials;