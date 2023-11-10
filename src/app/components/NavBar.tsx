const NavBar = () => {
    return (
        <header className="fixed xl:absolute bottom-0 xl:bottom-auto left-0 xl:left-auto xl:top-0 xl:right-0 flex items-center xl:items-end justify-center xl:justify-end xl:bg-none w-full xl:w-[400px] rounded-lt-xl  rounded-rt-xl">
            <nav className="flex items-center justify-center text-[16px] font-medium text-litewhite gap-10 rounded-bl-none xl:rounded-bl-xl rounded-tr-xl xl:rounded-tr-lg rounded-tl-xl xl:rounded-tl-none  border border-jet border-solid p-5 bg-smoky-gray shadow-sm w-full">
                <a href="" className="hover:text-vegas-gold transition-all delay-200">About</a>
                <a href="" className="hover:text-vegas-gold transition-all delay-200">Journey</a>
                <a href="" className="hover:text-vegas-gold transition-all delay-200">Portfolio</a>
                <a href="" className="hover:text-vegas-gold transition-all delay-200">Contact</a>
            </nav>
        </header>
    );
}
 
export default NavBar;