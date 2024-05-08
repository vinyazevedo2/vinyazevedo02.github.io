/*animate.style*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Header = () => {

    return(
        <header>
            <nav>
                <div>
                

                    <Link to="/lista-enquetes">
                    <FontAwesomeIcon icon={faList}/> Lista enquete
                   
                    </Link>

                    <Link to="/sobre">
                    <FontAwesomeIcon icon={faCircleInfo}/> Sobre
                    
                    </Link>

                </div>

                <div>
   
                   
                   <Link to="/adicionar-enquete">
                   <FontAwesomeIcon icon={faPlus}/> Adicionar enquete
                   
                   </Link>


                   <Link to="Admin">
                   <FontAwesomeIcon icon={faUser}/> Login
                   </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header