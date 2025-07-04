export default function InputField({ label, type, placeholder, onChange}){
    return (
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                className="w-full p-2 bg-blue-200 border border-gray-300 rounded" 
                onChange={onChange}
            />
        </div>
    )
}