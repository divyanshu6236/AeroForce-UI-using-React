import Navbar from "./Navbar";
import Bottom from "./Bottom";
import fighter2 from '../assets/fighter2.png'

const Center = () => {
    return (
        <div className = "absolute inset-0 bg-black/60">
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-col justify-start items-center h-screen">
                <h1 className="absolute text-[250px] font-bold text-white/20">AeroForce</h1>
                <img src={fighter2} alt="fighter" className="fighter2 mt-10 h-150 w-230"/>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    )
}

export default Center;