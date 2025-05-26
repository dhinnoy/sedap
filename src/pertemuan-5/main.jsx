import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import SideBar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <div id="app-container" className="bg-gray-100 min-h-screen flex">
                <div id="layout-wrapper" className="flex flex-row flex-1">
                        <SideBar/>
                        <div id="main-content" className="flex-1 p-4">
                            <Header />
                            <Dashboard/>
                    </div>
                </div>
            </div>
            
        </div>
    )