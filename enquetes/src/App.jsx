import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Rotas from "./config/routes";


function App(){
  return (
    <>
      <Header></Header>
      <main>
        <Rotas></Rotas>
      </main>
      <Footer></Footer>
    </>
  );
}


export default App; 