import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
    return ( 
        <main className="w-full min-h-[70vh] p-[20%] bg-smoky-black grid grid-cols-1 items-center justify-center place-items-center">
            <BiLoaderCircle className="text-[100%] text-vegas-gold animate-spin"/>
        </main>
     );
}
 
export default Loader;