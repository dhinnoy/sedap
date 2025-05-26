import { BsPlusLg } from "react-icons/bs";
import ListMenu from "./ListMenu";
export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* min-h-screen untuk full sampai bawah */}
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span className="font-poppins-extrabold text-[48px] text-gray-900">Sedap <b className="text-hijau">.</b></span>
                <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <ListMenu/>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 text-black">
                            <span className="flex items-center"><BsPlusLg />Add Menus</span>
                            {/* flex biar sebaris biar jadi sejajar ditambahin items-center beri margin right (mr) jika ingin simbol dan text berjarak */}
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                </div>
                <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
