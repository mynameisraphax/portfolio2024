import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cursos from "./pages/Cursos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import Projects from "./pages/Projects";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/cursos" element={ <Cursos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
                <Route path="/projects" element={ <Projects /> }></Route>
                <Route path="/*" element={ <Page404 /> }></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;

