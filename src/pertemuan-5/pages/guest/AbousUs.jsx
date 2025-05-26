import { Link } from "react-router-dom";

export default function AbousUs(){
    return(
        <div className="mt-25 mb-20 mx-20">
            <section className="bg-white mb-10">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

            <div className="flex justify-center items-center ">
            <img
                src="https://markeythemes.vercel.app/skywave/images/girl-book.png"
                alt="about"
            />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-200 text-hijau px-4 py-1.5 rounded-full text-base font-medium w-fit">
                <span className="text-xl">📦</span> Tentang Kami
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                Semua yang Anda Butuhkan untuk Menyajikan Hidangan Terlezat
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Sedap terintegrasi mulus dengan sistem dapur Anda. Kemudahan menghubungkannya
                dengan berbagai alat dan platform membuatnya cocok untuk menghadirkan pengalaman
                kuliner terbaik.
              </p>

              <Link
                to="/Register"
                className="text-hijau font-semibold inline-flex items-center gap-1 text-lg hover:underline"
              >
                Learn More →
              </Link>

              <div className="mt-10 border-l-4 pl-6 border-gray-300">
                <p className="italic text-gray-600 text-lg mb-5">
                  "The seamless integrations help me connect 
                  Sedap with other kitchen tools I use, making it easier to manage everything in one place."
                </p>

                <div className="flex items-center gap-5">
                  <img
                    src="https://markeythemes.vercel.app/skywave/images/team/avatar-1.jpg"
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-lg">Dhini Handayani</p>
                    <p className="text-base text-gray-500">Mahasiswa PCR @Sedap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}