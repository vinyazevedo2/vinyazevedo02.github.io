import React from "react";
import { Axios } from "axios";

const urlPlaceHolder = Axios.create({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-Type": "application/json"
    }
})

export default urlPlaceHolder;