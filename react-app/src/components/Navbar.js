import  NavbarLink from "./NavbarLink";
import Logo from '../assets/placeholders/logo-icon.png';
import Profile from '../assets/placeholders/profile-icon.png';
import Search from "../assets/placeholders/search-icon.png";
import InputField from "./InputField";
import { useState } from "react";

function Navbar(){
    function toggleSearch(){
        setSearchClicked(!searchClicked);
        return searchClicked ? <InputField fieldName="Search" /> : null
    }

    const leftFields = {
        Logo: {
            image: Logo,
            imageClass: "icon"
        },
        Books: {},
        Libraries: {},
        Discussion: {}
    }

    const rightFields = {
        Search: {
            image: Search,
            imageClass: "icon",
            onClick: toggleSearch

        },
        Profile: {
            image: Profile,
            imageClass: "icon"
        }
    }

    const [searchClicked, setSearchClicked] = useState(false);

    return (
        <nav>
            <div className="left-nav-div">
                {Object.entries(leftFields).map(([title, kwargs]) => {
                    return <NavbarLink 
                    title={title} link="#" 
                    linkClass="navbar-element" 
                    image={kwargs.image} key={title} 
                    onClick={kwargs.onClick} imageClass="icon"/>
                    })}
            </div>
            <div className="right-nav-div">
                {Object.entries(rightFields).map(([title, kwargs]) => {
                    return <NavbarLink 
                    title={title} link="#" 
                    linkClass="navbar-element" 
                    image={kwargs.image} key={title} 
                    onClick={kwargs.onClick} imageClass="icon"/>
                    })}
            </div>
        </nav>
    );
}

export default Navbar;