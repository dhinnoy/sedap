import { useState } from "react";
import Information from "../../components/guest/Information";
import Data from "../../json/ordersquiz.json";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function OrdersQuiz(){

    const head=["id", "nama_pesanan", "email", "status"];

    const [dataForm,setDataForm] = useState({
        email: "",
        pesanan: "",
    })

    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })

    
    }

    const handleSearch = () => {
    const emailSearch = dataForm.email.toLowerCase();
    const pesananSearch = dataForm.pesanan.toString().toLowerCase(); //berupa number jadi to string

    const filtered = Data.filter((item) => {
        const emailMatch = dataForm.email
            ? item.email.toLowerCase().includes(emailSearch)
            : true;

        const pesananMatch = dataForm.pesanan
            ? item.id.toString().includes(pesananSearch)
            : true;

        return emailMatch && pesananMatch;
    });

    setFilteredData(filtered);
    };

    return(
        <div className="mt-25 mx-20">
            {/* CEK PEMESANAN */}
            <h1 className="text-center font-poppins-extrabold text-6xl text-hijau">Order Checker</h1>
            <br/>
            <div className="">
            <form className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-6 mb-10">
            {/* Email */}
            <div className="flex items-start gap-4">
                {/* Label + Input lebih rapat */}
                <div className="w-2/3">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                    Email Address
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
                    placeholder="you@example.com"
                />
                </div>

                {/* Validasi */}
                <div className="w-1/3 pt-6">
                {!dataForm.email ? (
                    <Information
                    info="Masukkan email yang valid."
                    className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md text-sm"
                    />
                ) : (
                    <Information
                    info="Email sudah benar."
                    className="p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-md text-sm"
                    />
                )}
                </div>
            </div>

            {/* Nomor Pesanan */}
            <div className="flex items-start gap-4">
                <div className="w-2/3">
                <label htmlFor="pesanan" className="block text-sm font-semibold text-gray-800 mb-1">
                    Nomor Pesanan
                </label>
                <input
                    type="number"
                    id="pesanan"
                    name="pesanan"
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
                    placeholder="Masukkan ID Pesanan Anda"
                />
                </div>

                <div className="w-1/3 pt-6">
                {!dataForm.pesanan ? (
                    <Information
                    info="Masukkan nomor pemesanan yang valid."
                    className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md text-sm"
                    />
                ) : (
                    <Information
                    info="Nomor sudah benar."
                    className="p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-md text-sm"
                    />
                )}
                </div>
            </div>

            {/* Tombol */}
            <div className="flex justify-center pt-4">
                <button
                type="button"
                onClick={handleSearch}
                className="bg-gradient-to-r from-green-300 to-green-500 hover:from-hijau hover:to-hijau text-white font-bold py-3 px-8 rounded-xl shadow-md transition duration-300 ease-in-out"
                >
                Cek Status Pesanan
                </button>
            </div>
            </form>
            <div className="m-3 shadow-lg">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-400 border-b text-center text-white">
                                <tr>
                                    {head.map((item, index) => (
                                        <th key={index} className="px-6 py-3">{item.toUpperCase()}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                <tr key={item.id} className="bg-white hover:bg-gray-50">
                                    {head.map((key, index) => (
                                    <td
                                        key={index}
                                        className="border border-gray-300 px-6 py-4 border-b"
                                    >
                                        {item[key]}
                                    </td>
                                    ))}
                                    {/* <td className="border border-gray-300 px-6 py-4 border-b">
                                        <div className="text-center flex gap-3 justify-center">
                                            <button className="text-purple-600 hover:text-purple-800">
                                                <FaEdit />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td> */}
                                </tr>
                                ))
                            ) : (
                                // Kalau belum cari, tampilkan semua data asli
                                Data.map((item) => (
                                <tr key={item.id} className="bg-white hover:bg-gray-50">
                                    {head.map((key, index) => (
                                    <td
                                        key={index}
                                        className="border border-gray-300 px-6 py-4 border-b"
                                    >
                                        {item[key]}
                                    </td>
                                    ))}
                                    {/* <td className="border border-gray-300 px-6 py-4 border-b">
                                        <div className="text-center flex gap-3 justify-center">
                                            <button className="text-purple-600 hover:text-purple-800">
                                                <FaEdit />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td> */}
                                </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
            
        </div>
        </div>
    )
}