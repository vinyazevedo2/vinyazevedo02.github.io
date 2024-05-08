import React from "react";
import { Route, Routes} from "react-router-dom";

import ListarEnquete from "../pages/ListarEnquetes";
import AdicionarEnquete from "../pages/AdicionarEnquete";
import Admin from "../pages/Admin";
import Sobre from "../pages/Sobre";

function Rotas(){
    return (
        <Routes>
            <Route path="/lista-enquetes" element={<ListarEnquete />}/>
            <Route path="/adicionar-enquete" element={<AdicionarEnquete />}/>
            <Route path="/Admin" element={<Admin />}/>
            <Route path="/Sobre" element={<Sobre />}/>
        </Routes>
    )
};

export default Rotas;