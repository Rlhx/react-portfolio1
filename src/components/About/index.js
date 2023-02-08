import { faGithub, faJava, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'; 

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const timeoutIdRef = useRef(null);

    useEffect(() =>{
     timeoutIdRef.current= setTimeout(()=>{
             setLetterClass('text-animate-hover');
         }, 3000);
         return ()=>clearTimeout(timeoutIdRef);
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>I'm very ambitious student in 3rd year of Bsc Computer Engineering 
                    with a passion for cybersecurity and a good background in software engineering.
                    Seeking an internship in a Cybersecurity,
                    Software Engineering or DevOps role to gain real-world experience in the field.
                </p>
                <p>
                    I'm quietly confident in my abilities, always seeking to improve and expand
                    my knowledge, and have a strong curiosity to learn new things and explore new ideas. 
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family person, an anime fanatic,
                    reading enthusiast, and tech-obsessed!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#XF3E2"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faDatabase} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faLinux} color="#XF17C"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color="#XF4E4"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                    </div>
                </div>

            </div>
        </div>
    <Loader type="pacman" />
    </>

    );
}

export default About