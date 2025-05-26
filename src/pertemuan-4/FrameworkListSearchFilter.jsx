import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");

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

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
      ]; //pengambilan tag unik untuk setiap pemanggilan sehingga dapat di map (memetakan keseluruhan tag menjadi array)

    // logic dan pemilteran
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    
    const filteredFrameworks = frameworkData.filter((framework) => { //dalam .filter ini ini dibuat pemfilteran 
      const matchesSearch =
        framework.name
                  .toLowerCase()
                  .includes(_searchTerm) || //include , goal pemfilteran supaya pengaksesan lebih cepat
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm); //dapat ditambahkan sebanyak kebutuhan
  
      const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;
      //Penggunaan variabel harus dipanggil dengan parameter yang digunakan sebagai contoh disini "dataform"

      return matchesSearch && matchesTag;
    });

    return (
        <div className="p-8">

            <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={dataForm.searchTerm} 
            onChange={handleChange} //penggunaan state yang menampung beberapa fungsi
            // onChange={(e)=>setSearchTerm(e.target.value)}
            />

            <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            // onChange={(e)=>setSelectedTag(e.target.value)}
            >
            <option value="">All Tags</option>
                    {allTags.map((tag, index) => ( //pemberian key untuk memanggil value tag berdasarkan indexnya (dalam bentuk array)
                        <option key={index} value={tag}>
                        {tag}
                        </option>
                    ))}
            </select>

            {filteredFrameworks.map((item, index) => (
		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
		                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
		                <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-600">Developed by : <b>{item.details.developer}</b> ({item.details.releaseYear})</p>
                        <a href={item.details.officialWebsite} className="text-blue-600 underline">Visit Website</a>
                        <br /><br />
                        {item.tags.map((tag,index)=>(
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>  
                ))}
        </div>
    )
}
