import React, { useContext } from "react";
import { Context } from "../Context";
import Theme from "../components/Theme"


function Header() {
   const {darkMode}=useContext(Context)

    return(
        <header className= {darkMode ? "hero-container-dark" :"hero-container"} >

            <div className="hero">
                <h1 className="hero-text">Where in the world?</h1>
                <Theme />
                {/* <button className="dark-mode-btn dark-mode-text " aria-label="Light mode / Dark mode"> */}
        {/* <FaBeer /> */}
        {/* <IoMoonOutline id="moonicon"/> */}
        {/* <FontAwesomeIcon icon="fa-regular fa-coffee" className="highlight"/> */}
            {/* <i class="fa fa-moon-o theme-switch" aria-hidden="true"></i> */}
            {/* <i className="fa fa-moon-o theme-switch" aria-hidden="true"></i>
            Dark Mode</button> */}
            </div>
       </header>
    );
};

export default Header;