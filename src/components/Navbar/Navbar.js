import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components';
import DataNavbar from '../../utils/constants/DataNavbar';


function Navbar() {
    const data = DataNavbar
return (
<NavbarContainer>
<NavbarStyle>
<div>
<h1 className={"navbar__brand"}>Movie App</h1>
</div>
        <div>
            <ul className={"navbar__list"}>
            {
                data.map(
                    function(data){
                        return(
                            <li className="navbar__item">
                                <Link className="navbar__title" to={data.url}>{data.title}</Link>
                            </li>
                        )
                    }
                )
            }
    </ul>
</div>
</NavbarStyle>
</NavbarContainer>
);
}

const NavbarStyle = styled.nav`
    display: flex; 
    flex-direction: column;

    .navbar__tittle {
        color: #fff;
        text-decoration: none;
    }
    .navbar__brand {
        font-size: 2.4rem; 
        margin-bottom: 1rem;
        margin: 2px;
    }
    .navbar__list { display: flex; 
        flex-direction: column; 
        list-style: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .navbar__brand { margin-bottom: 0;
        }
        .navbar__list {
        flex-direction: row;
        }
        .navbar__item { margin: 0 1rem;
        }

    .navbar__item {
        margin: 0 1rem;
        padding: 0.8rem;
        border-radius: 10px;
        background-color: #246BCE
    }

`;

const NavbarContainer = styled.div`
background-color: rgb(13, 167, 167); 
padding: 1rem; 
color: #fff; 
`

export default Navbar;
