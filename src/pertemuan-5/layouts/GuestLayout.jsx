import { Outlet } from "react-router-dom";
import NavigationBar from "../components/guest/NavigationBar";
import Footer from "../components/guest/Footer";

export default function GuestLayout(){
    return(
        <div>
            <NavigationBar/>
            <div className="mt-35">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}