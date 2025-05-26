import Button from "../../components/Button";

export default function Banner() {
  return (
    <div>
      <section className="bg-gray-100  mt-[-80px]">
        <div className="grid max-w-screen-xl px-4 py-12 mx-auto gap-12 lg:grid-cols-12 lg:py-20 lg:gap-8 xl:gap-10">  
          <div className="order-1 lg:order-1 place-self-center lg:col-span-7 space-y-6">
            <h1 className="text-4xl font-semibold md:text-5xl xl:text-6xl leading-tight">
              You Start, Raise And Grow Faster With
              <span className="text-hijau ml-2">Sedap</span>
            </h1>
            <p className="text-gray-500 font-light md:text-lg lg:text-xl dark:text-gray-400">
              Tentukan tujuan kulinermu — apakah ingin meningkatkan penjualan, menyajikan pengalaman makan yang lebih baik,
  mempercepat proses operasional dapur, atau memperluas jangkauan pelanggan? Sedap hadir untuk mendukung semuanya.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://markeythemes.vercel.app/skywave/images/google.png"
                  alt="google"
                  className="w-6 h-6"
                />
                <span className="font-semibold">4.5</span>
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-500 ml-2">Best Rated On Google</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.seeklogo.com/logo-png/38/2/grab-food-logo-png_seeklogo-382867.png"
                  alt="linkedin"
                  className="w-6 h-6"
                />
                <span className="font-semibold">4.7</span>
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-500 ml-2">Best Rated On Grab Food</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 ">
              <Button name="Get Started" to="/register" />
              <Button name="Login" to="/login" />
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center items-center lg:col-span-5">
            <img
              src="https://markeythemes.vercel.app/skywave/images/bg-img-3.png"
              alt="banner"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>


      <section className="bg-hijau text-white py-12 mt-[-48px] lg:mt-[-80px] mb-3">
        <div className="max-w-screen-xl px-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
          <div>
            <h3 className="text-3xl font-bold">230</h3>
            <p className="text-sm mt-2">Startups We Have Funded</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">7k</h3>
            <p className="text-sm mt-2">Funded From Skywave Community</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">$68B</h3>
            <p className="text-sm mt-2">Our Combined Valuation</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm mt-2">Years Of Best Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
