import "./index.scss";
import {Link, NavLink} from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser, faPencilSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Sideabar = () => (
    <div className={'nav-bar'}>
        <Link className={'logo'} to={'/'}>
            <img src={LogoS} alt={"logo"}/>
            <img className={"sub-logo"} src={LogoSubtitle} alt={"slobodan"}/>
        </Link>
        <nav>
            <NavLink to={"/"} exact="true" activeclassname="active">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink to={"/about"} exact="true" className={"about-link"} activeclassname="active">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink to={"/contact"} exact="true" activeclassname="active" className={"contact-link"}>
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink to={"/projects"} exact="true" className={"projects-link"} activeclassName="active">
                <FontAwesomeIcon icon={faPencilSquare} color = "#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.linkedin.com/in/nick-cecchin-5467b91b8"}>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/NickCecc"}>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sideabar;