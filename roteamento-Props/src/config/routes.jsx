import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/AdicionaDados";
import Config from "../pages/Config";


function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Config" element={<Config />}></Route>
            <Route path="/Enderecos" element={<BuscarEnderecos />}></Route>

        </Routes>
    )
}

export default Rotas;