export default function HelloWorld(){
    const propsUserCard = {
        nama : "Goku",
        nim : "999999",
        tanggal : "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama="Dhini Handayani"
            nim="2355301051"
            tanggal={new Date().toLocaleDateString()}
            />
            <UserCard{...propsUserCard}/>
            <DataDiri
                profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsiRJRJVZsNbhMQvW5_jHqApzmQwPrGBvOqCg6CLWtvmvDYJUcpkzGeoXXs8Lmv-NMs4&usqp=CAU"
                nama="Dhini Handayani"
                nim="2355301051"
                kelas="23 TI E"
                register={new Date().toLocaleDateString()}
            />
            <Gambar/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

function DataDiri(props){
    return (
        <div>
            <hr />
            <h2>IDENTITAS DIRI</h2>
            <hr/>
            <table>
                <tr>
                    <th>PROFILE</th>
                    <th>NAMA</th>
                    <th>NIM</th>
                    <th>KELAS</th>
                    <th>REGISTER</th>
                </tr>
                <tr>
                    <td>
                        <Gambar
                            gambar = {props.profile}
                            />
                    </td>
                    <td>{props.nama.toUpperCase()}</td>
                    <td>{props.nim}</td>
                    <td>{props.kelas}</td>
                    <td>{props.register}</td>
                </tr>
            </table>
            <hr />
        </div>
    )
}

function Gambar(props){
    return(
        <div>
        <img src={props.gambar}/>
        </div>
    );
}

// function PersonalCard(){
//     return(

//     )
// }