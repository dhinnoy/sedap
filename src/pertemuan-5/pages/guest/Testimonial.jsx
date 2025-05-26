import Table from "../../components/Table";
import Data from "../../json/testimonial.json";

export default function Testimonial(){
    return(
        <div>
            <h1 className="text-center font-poppins-extrabold text-6xl text-hijau">Testimonial</h1>
            {/* <Table
                head={["id", "nama", "perusahaan", "jabatan", "testimoni"]}
                data={Data}
            /> */}

            <div className="grid md:grid-cols-2 gap-6 my-15 mx-20">
                {Data.map((item, index) => (
                    <div key={index} className="bg-gray-100 text-black p-6 rounded-xl shadow-md">
                        
                        <div className="flex items-center space-x-2 mb-5">
                            <span className="font-poppins-extrabold text-emerald-800">{item.perusahaan}</span>
                        </div>
                        <p className="mb-5 text-sm font-semibold text-emerald-700">{item.testimoni}</p>
                        <div className="flex items-center mt-4">
                            <img src={item.foto_profil} className="h-10 w-10 rounded-full mr-3"/>
                            <div>
                            <p className="font-semibold">{item.nama}</p>
                            <p className="text-xs text-gray-500">{item.jabatan}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}