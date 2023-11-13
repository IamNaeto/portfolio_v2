import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname()
    return (
        <header className="fixed lg:absolute bottom-0 lg:bottom-auto left-0 lg:left-auto lg:top-0 lg:right-0 flex items-center lg:items-end justify-center lg:justify-end w-full lg:w-[400px] rounded-lt-lg  rounded-rt-lg z-50">
            <nav className="relative flex items-center justify-center text-[16px] font-medium text-litewhite gap-7 lg:gap-10 rounded-bl-none lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-lg rounded-tl-lg lg:rounded-tl-none  border border-jet border-solid p-4 backdrop-blur-lg bg-transparent lg:bg-smoky-gray shadow-sm w-full z-36">
                <Link href="/" className={pathName === "/" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>About</Link>
                <Link href="/journey" className={pathName === "/journey" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Journey</Link>
                <Link href="/projects" className={pathName === "/projects" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Projects</Link>
                <Link href="/contact" className={pathName === "/contact" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Contact</Link>
            </nav>
        </header>
    );
}

export default NavBar;