import React,{Children, createContext, useContext} from "react";

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({children}) =>{

    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}//configuração padrao