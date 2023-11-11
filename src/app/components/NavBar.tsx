import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname()
    return (
        <header className="fixed xl:absolute bottom-0 xl:bottom-auto left-0 xl:left-auto xl:top-0 xl:right-0 flex items-center xl:items-end justify-center xl:justify-end xl:bg-none w-full xl:w-[400px] rounded-lt-xl  rounded-rt-xl">
            <nav className="flex items-center justify-center text-[16px] font-medium text-litewhite gap-10 rounded-bl-none xl:rounded-bl-xl rounded-tr-xl xl:rounded-tr-lg rounded-tl-xl xl:rounded-tl-none  border border-jet border-solid p-5 bg-smoky-gray shadow-sm w-full">
                <Link href="/" className={pathName === "/" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>About</Link>
                <Link href="/journey" className={pathName === "/journey" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Journey</Link>
                <Link href="/projects" className={pathName === "/projects" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Projects</Link>
                <Link href="/contact" className={pathName === "/contact" ? "visited:text-vegas-gold font-bold transition-all delay-200" : "hover:text-gray transition-all delay-200"}>Contact</Link>
            </nav>
        </header>
    );
}

export default NavBar;