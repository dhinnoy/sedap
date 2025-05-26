import { createRoot } from "react-dom/client";
import Tailwindcss from "./Tailwindcss";
import UserForm from "./UserForm";
import './tailwind.css';
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Tailwindcss/>
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )