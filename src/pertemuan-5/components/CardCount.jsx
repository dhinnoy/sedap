
import * as FaIcons from "react-icons/fa"; 

export default function CardCount({icon, jumlah, name, color}){
    const Icon = FaIcons[icon];  
    return(
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div id="orders-icon" className={`bg-${color} rounded-full p-4`}>
                {Icon && <Icon className="text-white" />}
            </div>
            <div id="orders-info" className="flex flex-col">
                <span id="orders-count" className="font-barlow-bold text-3xl text-zinc-800">{jumlah}</span>
                <span id="orders-text" className="text-gray-400">{name}</span>
            </div>
        </div>
    )
}