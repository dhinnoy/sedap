export default function CardTestimonial(){
    return(
            <div className="grid md:grid-cols-2 gap-6">
                {Data.map((item, index) => (
                    <div key={index} className="bg-amber-50 text-black p-6 rounded-xl shadow-md">
                        
                        <div className="flex items-center space-x-2 mb-5">
                            <img src={item.logo} alt={item.company} className="h-6" />
                            <span className="font-poppins-semibold text-birutua">{item.company}</span>
                        </div>
                        <p className="mb-4 text-sm">{item.testimonial}</p>
                        <div className="flex items-center mt-4">
                            <img src={item.photo} className="h-10 w-10 rounded-full mr-3"/>
                            <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.jenis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}