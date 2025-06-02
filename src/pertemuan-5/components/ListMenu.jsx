import { BiUserCircle } from "react-icons/bi"; 
import { BiError } from "react-icons/bi"; 
import { MdFastfood, MdNoEncryptionGmailerrorred } from "react-icons/md"; 
import { BiCommentError } from "react-icons/bi"; 
import { BsPeople } from "react-icons/bs"; 
import { AiOutlineFile } from "react-icons/ai"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { NavLink, Link } from "react-router-dom"

export default function ListMenu(){
    // state function isActive hanya ada di NavLink 
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : //Kondisi yang akan terpenuhi bila isActive bernilai true
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold" //Kondisi jika isActive false
        }`
    return(
        <div>
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3 font-barlow ">
                    <li>
                        <NavLink id="menu-1" to="/dashboard" className={menuClass}>
                            <AiOutlineHome className="mr-4"/> 
                            Dashboard
                        </NavLink>
                        </li>
                    <li>
                        <NavLink id="menu-2" to="/orders" className={menuClass}>
                        <AiOutlineFile className="mr-4"/>Orders</NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/customers" className={menuClass}>
                        <BsPeople className="mr-4"/>Customers</NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-4" to="/user" className={menuClass}>
                        <BiUserCircle className="mr-4"/>User</NavLink>
                    </li>
                    <li>
                        <NavLink
                                id="menu-5"
                                to="/products"
                                className={menuClass}
                            >
                                <MdFastfood className="mr-4 text-xl" />
                                Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-6" to="/400" className={menuClass}>
                        <BiCommentError className="mr-4"/>Error 400</NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-7" to="/401" className={menuClass}>
                        <MdNoEncryptionGmailerrorred className="mr-4"/>Error 401</NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-8" to="/403" className={menuClass}>
                        <BiError className="mr-4"/>Error 403</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}