import  NavbarLink from "./NavbarLink";
import Logo from '../assets/placeholders/logo-icon.png';
import Profile from '../assets/placeholders/profile-icon.png';
import Search from "../assets/placeholders/search-icon.png";

function Navbar(){
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
            imageClass: "icon"

        },
        Profile: {
            image: Profile,
            imageClass: "icon"
        }
    }

    return (
        <nav>
            <div className="left-nav-div">
                {Object.entries(leftFields).map(([title, kwargs]) => {return <NavbarLink title={title} link="#" linkClass="navbar-element" image={kwargs.image} key={title} imageClass="icon"/>})}
            </div>
            <div className="right-nav-div">
                {Object.entries(rightFields).map(([title, kwargs]) => {return <NavbarLink title={title} link="#" linkClass="navbar-element" image={kwargs.image} key={title} imageClass="icon"/>})}
            </div>
        </nav>
    );
}

export default Navbar;