import { Link,NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
//import LogoSub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFolderOpen, faGears, faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () =>{
    const [ShowNav, setShowNav] = useState(false);
    
return(
    <div className='nav-bar'>
        <Link 
            className='logo' 
            to='/'
            onClick={() => setShowNav(false)}
        >
            <img src={LogoS} alt ="logo" />  
        </Link>
        <nav className={ShowNav ? 'mobile-show': ''}>
            <NavLink 
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}  
                activeclassname="active" 
                className="skills-link" 
                to="/skills">
                <FontAwesomeIcon icon={faGears} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="projects-link" 
                to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)} 
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color ='#ffd700'
            size='3x'
            className='close-icon'
        />
        </nav>
        
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/hilassoun-a-roland-sanou-5181981b9'
                    >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/Rlhx'
                    >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
)
}

  


export default Sidebar