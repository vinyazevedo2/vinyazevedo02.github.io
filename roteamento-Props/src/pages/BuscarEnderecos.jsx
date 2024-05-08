import React, { useState } from "react";
import { UrlViaCep } from "../config/config";

const BuscarEnderecos = () => {

    const [cep, setCep] = useState({
        cep: "", 
    });

    const [msgErro, setMsgErro] = useState("");
    function buscaCep(e) {
        console.log(e);
        const cep = e.target.value;

        setEndereco({
            cep
        });

        if (cep && cep.length === 8) {
            try {
                UrlViaCep.get(`${cep}/json/`).then(function (response) {
                    console.log(response);
                    if (!response.data.erro) {
                        console.log(response);
                        setEndereco({
                            cep:cep,
                            rua: dados.logradouro,
                            bairro: dados.bairro,
                            cidade: dados.localidade,
                            estado: dados.uf
                        });

                    }
                });
            } catch (error) { 
                setMsgErro("CEP nao encontrado");
            }

        }
    }

    return (<main>
        <h3>digite o cep</h3>
        <input type="text" onChange={(e) => setCep(e.target.value)} />
        <div>{msgErro}</div>
        <section>
            <h3></h3>
            <ul>
                <li>{endereco.cep}</li>
                <li>{endereco.rua}</li>
                <li>{endereco.bairro}</li>
                <li>{endereco.cidade}</li>
                <li>{endereco.estado}</li>
            </ul>
        </section>
    </main>
    );
};

export default BuscarEnderecos;