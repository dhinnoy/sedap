export default function ArtikelDetail(){
    return (
        <div>
            <Title            
                title = "perkembangan pendidikan di Indonesia : Dari masa ke masa"
                categories = "news"
                date = {new Date().toLocaleDateString()}
            />
            <IsiArtikel/>
            <DataPenulis
                profile = "https://secure.gravatar.com/avatar/f5949a6f0e322c81856303acfc31cda0?s=110&d=mm&r=g"
                nama = "Rohman Obet"
                email = "rohman@gmail.com"
            />
        </div>
    )
}

function Title(props){
    return (
        <div>
            <h1>{props.title.toUpperCase()}</h1>
            <tr>
                <th><h3>Categories</h3></th>
                <th><h3>Date</h3></th>
            </tr>
            <tr>
                <td><h5>{props.categories.toUpperCase()}</h5></td>
                <td><h5>{props.date.toUpperCase()}</h5></td>
            </tr>
        </div>
    )
}

function Image(props){
    return (
        <div>
            <img src={props.gambar} alt="Gambar"/>
        </div>
    )
}

function DataPenulis(props){
    return(
        <div className="cardPenulis">
            <tr>
                <th>
                    <Image
                        gambar = {props.profile}
                    />
                </th>
                <th>{props.nama}</th> 
            </tr>
            <tr>
                <td>{props.email}</td>
            </tr>
        </div>
    )
}

function Komentar(props){
    return(
        <div className="komentar">

        </div>
    )
}

function IsiArtikel(){
    return(
    <div className="card">
        <p>
        Pendidikan di Indonesia telah melalui berbagai perjalanan yang menarik sejak zaman kuno hingga era digital saat ini. Dulu, pada masa kerajaan seperti Sriwijaya dan Majapahit, pendidikan cenderung informal dengan guru langsung mengajar murid-murid, terutama dari kalangan bangsawan.

        Masuk masa kolonial Belanda, konsep sekolah formal mulai diperkenalkan, namun hanya untuk orang Belanda, sedangkan penduduk bumiputera dianggap kelas dua.

        Era kolonial Belanda kemudian membawa sistem pendidikan yang lebih formal dengan tujuan untuk mengatur masyarakat pribumi guna memenuhi kebutuhan industri mereka.

        Peran tokoh seperti Ki Hajar Dewantara yang mendirikan Taman Siswa menjadi titik balik penting, di mana pendidikan tidak hanya untuk kalangan elite, tetapi untuk seluruh rakyat.

        Setelah kemerdekaan, sistem pendidikan nasional mengalami transformasi. Meskipun agak bergejolak pada awalnya, semangat untuk meratakan akses pendidikan semakin meningkat.

        Tahun 1975, terjadi reformasi di mana pendidikan digunakan sebagai alat untuk pembangunan nasional. Program Wajib Belajar Sembilan Tahun diperkenalkan untuk memastikan semua anak Indonesia mendapatkan pendidikan dasar.

        Era reformasi pada tahun 1998 membawa perubahan signifikan dalam pendidikan. Fokusnya mulai beralih ke pemberdayaan siswa dan kurikulum yang lebih inklusif.

        Pendidikan di Indonesia saat ini masih menghadapi berbagai tantangan, termasuk kesenjangan antar daerah, kualitas guru, dan ketidakmerataan fasilitas belajar. Namun, terdapat juga perkembangan positif, terutama dalam pemanfaatan teknologi.

        Teknologi, seperti internet dan e-learning, telah menjadi sahabat baru dalam pendidikan, memungkinkan pembelajaran dari mana saja. Namun, tantangan seperti akses internet yang belum merata masih menjadi kendala.

        Selain itu, pendidikan karakter juga menjadi fokus penting, bukan hanya tentang akademis, tetapi juga tentang pembentukan kepribadian yang kuat dan keterampilan soft skill.

        Pendidikan di Indonesia tidak lagi terbatas pada sekolah formal saja. Ada banyak pelatihan, kursus online, dan aktivitas lain yang juga memberikan pengetahuan.

        Dengan perkembangan teknologi, pendidikan semakin modern dan tidak hanya berkutat pada pelajaran akademis, tetapi juga pada pengembangan keterampilan lainnya.

        Meskipun telah ada kemajuan, masih banyak tantangan yang harus dihadapi, seperti kesenjangan antara daerah, kualitas pendidikan yang belum merata, dan kurangnya sumber daya.

        Harapannya, pendidikan di Indonesia akan terus berkembang menjadi lebih merata, berkualitas, dan memberikan kesempatan yang setara bagi semua anak bangsa. Semangat belajar teruslah menyala untuk masa depan yang lebih baik!
        </p>
    </div>
    )
}