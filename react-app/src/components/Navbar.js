import  NavbarLink from "./NavbarLink";
import Logo from '../assets/placeholders/logo-icon.png';
import Profile from '../assets/placeholders/profile-icon.png';

function Navbar(){
    const fields = {
        Logo: {
            image: Logo,
            imageClass: "icon"
        },
        Books: {},
        Discutions: {},
        Search: {},
        Profile: {
            image: Profile,
            imageClass: "icon"
        }
    }

    return (
        <nav>
            {Object.entries(fields).map(([title, kwargs]) => {return <NavbarLink title={title} link="#" linkClass="navbar-link" image={kwargs.image} key={title} imageClass="icon"/>})}
        </nav>
    );
}

export default Navbar;