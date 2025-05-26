import { useState } from "react";
import Data from "../../json/produk.json";

export default function TopProduk(){

    const [dataForm, setDataForm] = useState({
            searchTerm: "",
            selectedTag: "",
            /*Tambah state lain beserta default value*/
            });
    
    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // logic dan pemilteran
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    
    const filteredFrameworks = Data.filter((framework) => { //dalam .filter ini ini dibuat pemfilteran 
      const matchesSearch =
        framework.nama //nama properties pada file json nya
                  .toLowerCase()
                  .includes(_searchTerm) || //include , goal pemfilteran supaya pengaksesan lebih cepat
        framework.deskripsi
                  .toLowerCase()
                  .includes(_searchTerm);//dapat ditambahkan sebanyak kebutuhan

      return matchesSearch;
    });

    return(
        <div>

            <h1 className="text-center font-poppins-extrabold text-6xl text-hijau">Product Of The Week</h1>
            <br />

            <div className="flex flex-col md:flex-row mb-4 justify-center">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search product..."
                    className="w-full md:w-1/2 p-2 border border-emerald-900 rounded mb-4"
                    value={dataForm.searchTerm} 
                    onChange={handleChange} //penggunaan state yang menampung beberapa fungsi
                    // onChange={(e)=>setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-10">
            {filteredFrameworks.map((item) => {
                return (
                    <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-emerald-50">
                    <h1 className="text-xl font-bold text-emerald-800">{item.nama}</h1>
                    <br />
                    <div className="font-semibold text-emerald-600">
                        <p>{item.description}</p>
                        <p>Kategori : {item.kategori}</p>
                        <p>Stok : {item.stok}</p>
                        <p>Harga : Rp{item.harga}</p>
                    </div>
                    <br />
                    <h6 className="text-emerald-700 font-semibold">{item.deskripsi}</h6>
                    </div>
                );
                })}
        </div> 
        </div>
    )
}