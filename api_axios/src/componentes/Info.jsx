import React, { useEffect, useState } from "react";
import axios from "axios";

const Info = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            });
    }, []);

    return (
        <>
            <h2>{data.titulo}</h2>
            <p>{data.descricao}</p>
        </>
    );
};

export default Info;
