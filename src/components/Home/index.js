import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
   const nameArray = ['a','n','o','u',' ','R','o','l','a','n','d']
   const jobArray = ['s','t','u','d','e','n','t']
   const timeoutIdRef = useRef(null);

   useEffect(() =>{
    timeoutIdRef.current= setTimeout(()=>{
            setLetterClass('text-animate-hover');
        }, 4000);
        return ()=>clearTimeout(timeoutIdRef);
   }, [])
   
   
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>     
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="hacker"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray = {nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray = {jobArray}
                idx={22}
                /> 
                </h1>
                <h2>cybersecurity/software eng enthousiast</h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div> 
    <Loader type="pacman" />
    </>    

    );

    
}

export default Home
