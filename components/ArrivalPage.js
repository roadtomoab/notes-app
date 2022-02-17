import { signIn } from "next-auth/client";

function ArrivalPage () {
    return (
        <div className="flex flex-col items-center justify-center min-h-full pt-60 pb-80 bg-black">
            <div className="text-white text-6xl font-sans font-thin max-w-sm text-center leading-12">WELCOME TO</div>
            <br></br>
            <div className="text-white text-6xl font-sans font-thin max-w-sm text-center leading-12">NOTE HOW</div>
            <br></br>
            <button onClick={signIn} className="bg-black hover:bg-white transition duration-300 border-none py-3 px-5 cursor-pointer font-sans text-5xl font-thin">ENTER</button>
        </div>
    )
}

export default ArrivalPage;