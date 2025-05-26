import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import ContainerArtikel from "./ContainerArtikel.jsx";
import ArtikelDetail from "./ArtikelDetail.jsx";
import FormQnA from "./FormQnA.jsx";
// import './custom.css'
import './artikel.css'

createRoot(document.getElementById("root"))
    .render(
        // <div>
        //     <Container>
        //         <HelloWorld/>
        //     </Container>
        // </div>
        // <div>
        //     <ContainerArtikel>
        //         <ArtikelDetail/>
        //     </ContainerArtikel>
        // </div>
        <div>
            <FormQnA/>
        </div>
    )