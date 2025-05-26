export default function Container({children}){
    return(
        <div>
            <header>
                {/* <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qzkxLm05chqDxKjB7ZXkCC0DTMr2FNotDg&s" alt="gambar" /> */}
                INSTITUT TEKNOLOGI BANDUNG
            </header>
           <div className="container">
            <br/>
                {children}
            <br/>
            </div> 
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
        
    )
}