import frameworkData from "./products.json";
import { useState } from "react";

export default function LatihanList() {

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
        framework.title //nama properties pada file json nya
                  .toLowerCase()
                  .includes(_searchTerm) || //include , goal pemfilteran supaya pengaksesan lebih cepat
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);//dapat ditambahkan sebanyak kebutuhan
  
      const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;
      //Penggunaan variabel harus dipanggil dengan parameter yang digunakan sebagai contoh disini "dataform"

      return matchesSearch && matchesTag;
    });

    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
      
        return (
          <div>
            {"★".repeat(fullStars)}
            {halfStar && "✮"}
            {"☆".repeat(emptyStars)}
          </div>
        );
      };

    return (
        <div className="p-10">

            <h1 className="text-center font-extrabold text-6xl text-blue-950">Product Of The Week</h1>
            <br />
            <div className="flex flex-col md:flex-row mb-4">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search framework..."
                    className="w-full md:w-1/2 p-2 border border-blue-900 rounded mb-4"
                    value={dataForm.searchTerm} 
                    onChange={handleChange} //penggunaan state yang menampung beberapa fungsi
                    // onChange={(e)=>setSearchTerm(e.target.value)}
                />

                <select
                    name="selectedTag"
                    value={dataForm.selectedTag}
                    onChange={handleChange}
                    className="w-full md:w-1/2 p-2 border border-blue-900 rounded mb-4"
                    // onChange={(e)=>setSelectedTag(e.target.value)}
                >

                <option value="">All Tags</option>
                        {allTags.map((tag, index) => ( //pemberian key untuk memanggil value tag berdasarkan indexnya (dalam bentuk array)
                            <option key={index} value={tag}>
                            {tag}
                            </option>
                        ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {filteredFrameworks.map((item) => {
                
                const discount = item.discountPercentage || 0; // default 0% kalau tidak ada
                const discountedPrice = item.price - (item.price * discount / 100);

                return (
                    <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-blue-50">
                    <h1 className="text-xl font-bold text-blue-950">{item.title}</h1>
                    <br />
                    <div className="font-medium text-blue-900">
                        <p>{item.description}</p>
                        <p>width : {item.dimensions.width}</p>
                        <p>height : {item.dimensions.height}</p>
                        <p>depth : {item.dimensions.depth}</p>
                        <tr>
                        <td>Rating : {item.rating}<StarRating rating={item.rating}/></td>
                        </tr>
                    </div>
                    <br />
                    <h6 className="text-red-700 text-lg line-through">Original Price: ${item.price.toFixed(2)}</h6>
                    <h6 className="text-blue-700 text-xl font-bold">Discounted Price ({discount}%) : ${discountedPrice.toFixed(2)}</h6>
                    <br />
                    {item.tags.map((tag, index) => (
                        <span key={index} className="bg-white text-blue-950 font-mono font-bold px-3 py-1 text-xs rounded-xl mr-2">
                        {tag}
                        </span>
                    ))}
                    </div>
                );
                })}
        </div>

            
        </div>
    )
}