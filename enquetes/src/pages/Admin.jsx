import React, { useState } from "react";

const Admin = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    console.log(senha);

    return (
        <section>
            <form>
                <label>Usuário</label>
                <br />
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                <br />

                <label>Senha</label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <br />
                <button type="submite">Acessar</button>
            </form>

        </section>
    );
};





export default Admin;