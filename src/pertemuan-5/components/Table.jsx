import { FaEdit, FaTrash } from "react-icons/fa";

export default function Table({ head, data }) {
    return (
        <div className="m-3 shadow-lg">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-400 border-b text-center text-white">
                        <tr>
                            {head.map((item, index) => (
                                <th key={index} className="px-6 py-3">{item.toUpperCase()}</th>
                            ))}
                                <th className="px-6 py-3">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                            <tr key={item.id} className="bg-white hover:bg-gray-50">
                                {head.map((key, index) => (
                                    <td
                                        key={index}
                                        className="border border-gray-300 px-6 py-4 border-b"
                                    >
                                            {item[key]}
                                    </td>
                                ))}
                                <td className="border border-gray-300 px-6 py-4 border-b">
                                    <div className="text-center flex gap-3 justify-center">
                                        <button className="text-purple-600 hover:text-purple-800">
                                            <FaEdit />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}
