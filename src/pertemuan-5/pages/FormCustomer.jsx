import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function FormCustomer() {
    const a = ["Customer", "Form", "Penambahan", "Data"]
    return (
        <div>
            <PageHeader
                        title = "Customers"
                        breadscrumb = {a}
                        children=""/>
            <div className="max-w-md m-4 p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-barlow-bold mb-4 text-gray-700 text-center p-2">ADD CUSTOMER</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Loyalty</label>
                        <select
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        >
                            <option value="">Pick Your Loyalty</option>
                            <option value="+62">Bronze</option>
                            <option value="+60">Silver</option>
                            <option value="+65">Gold</option>
                        </select>
                    </div>
                    <div className="mt-7">
                        <Link to="/customers">
                            <button
                                type="submit"
                                className="w-full bg-gray-600 hover:bg-green-500 text-white font-bold py-2 rounded-md transition"
                            >
                                SUBMIT
                            </button>
                        </Link>
                    </div>
                </form> 
            </div>
        </div>
    );
}
