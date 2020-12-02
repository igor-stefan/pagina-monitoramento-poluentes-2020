import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {  
        return(
            <div className = "mb1">
            <img  
                src="https://www.ifpb.edu.br/imagens/logotipos/ifpb-1" 
                alt="ifpb" 
                title="ifpb"
                height="5%" width="10%"
                style = {{ position: 'relative', float: 'left'}}
                className = "pa1"
            />
            <nav className = 'flex w-85 page__menu page__custom-settings menu'>
                <ul className="menu__list r-list">
                    <Link to = "/" className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> Inicio </li>
                    </Link>  
                    <Link to = "/co " className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> CO </li>
                    </Link>
                    <Link to = "/co2 " className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> CO2 </li>
                    </Link>
                    <Link to = "/o3 " className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> O3 </li>
                    </Link>
                    <Link to = "/no2 " className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> NO2 </li> 
                    </Link>
                    <Link to = "/so2 " className = "menu__link r-link text-underlined">
                        <li className = "menu__group"> SO2 </li>  
                    </Link>
                </ul>
            </nav>
            <h1 className = "tc pt2">Monitoramento</h1>
            <hr/>
            </div>  
        )    
}

export default Navigation;