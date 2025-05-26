import { Outlet } from "react-router-dom";

export default function ErrorLayouts(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center p-6">
                <Outlet/>
            </div>
        </div>
    )
}