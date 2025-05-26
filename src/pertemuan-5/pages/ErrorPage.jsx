import { AiOutlineRollback } from "react-icons/ai"; 
import { Link } from "react-router-dom";

export default function ErrorPage({code}){

    let desc = "";
    let img = "";

    if(code == "404"){
        desc = "Page Not Found"
        img = "./img/error2.png"
    }
    else if(code == "401"){
        desc = "Authorization Required"
        img = "./img/error1.png"
    }
    else if(code == "400"){
        desc = "You've Sent a Bad Request"
        img = "/img/error3.png"
    }
    else{
        desc = "This is Forbidden Area"
        img = "./img/error4.png"
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center p-6">
                <h1 className="font-poppins-extrabold text-[64px] mb-2">{code}!</h1>
                <p className="font-poppins text-[24px] font-bold text-gray-800 mb-6">{desc}</p>
                <img src={img} alt="gambar error" className="mx-auto w-60 md:w-80 mb-8" />
                <Link
                    to="/login"
                    className="font-poppins inline-flex items-center font-semibold text-black hover:text-red-600 underline underline-offset-4 decoration-2"
                    >
                    <AiOutlineRollback className="mr-2" />
                    Go Back
                </Link>
            </div>
        </div>
    )
}