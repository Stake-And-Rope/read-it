import {Link} from "react-router-dom";
import "./components.css";

function NavbarLink({title, link, image, linkClass, imageClass}){
    return (
            <Link to={link} className={`${image ? "navbar-icon": "navbar-link"} ${linkClass}`}>
                {image ? <img src={image} alt={title} className={imageClass}/>: title}
            </Link>
    );
}

export default NavbarLink;