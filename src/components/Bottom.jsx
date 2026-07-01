import Card from '../assets/card.png'

const Bottom = () => {
    return (
        <div>
            <div className="absolute left-16 bottom-5 text-white z-30">
                <h4 className="text-xs">Advanced Stealth Technology</h4>
                <h1 className="text-4xl font-bold leading-tight mt-4">What the<br />Future holds for<br />Air Superiority</h1>
                <button className="flex items-center justify-center h-[40px] w-[180px] mt-8 px-8 py-4 bg-white text-black rounded">Explore Aircraft</button>
            </div>
            <div className="absolute right-16 bottom-5 z-30">
                <img src={Card} alt="Card" className="w-[220px] h-[200px]"/>
            </div>
        </div>
    )
}

export default Bottom;