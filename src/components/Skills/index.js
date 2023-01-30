import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Skills = () =>{

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
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S','k','i','l','l','s']}
                        idx ={15}/>
                    </h1>
                    <p>
                    Pursing a learning path in cybersecurity since last year. 
                    During this time, I have acquired a strong foundation in 
                    various technologies, such<span className='tech'> network security</span>, <span className='tech'>computer forenscis</span>, <span className='tech'>ethical hacking</span>, and familarity 
                    with Linux Distrubution like <span className='tech'>ubuntu</span>, <span className='tech'>Kali linux</span> and <span className='tech'>Debian</span>.</p>
                    
                    <p>
                    As part of my software and web development skill development 
                    I have learned <span className='tech'>Python</span>, <span className='tech'>Java</span>, <span className='tech'>C++</span>, <span className='tech'>HTML</span>, <span className='tech'>CSS</span>, <span className='tech'>JavaScript</span> and 
                    some popular frameworks like <span className='tech'>React</span> etc.
                    </p>
                    
                    <p>
                    My experience has given me a well-rounded skillset that allows 
                    me to work on cybersecurity or software dev projects. I am confident 
                    that I improve myself when facing real life work experience
                    in an organization. 
                    </p>
                    
                    <p>
                    Visit my <a 
                    target="_blank" 
                    rel='noreferrer'
                    href= 'https://www.Linkedin.com/in/hilassoun-a-roland-sanou-5181981b9'>
                    Linkedin </a>
                    profile for more details. Also you can checkout my cv on this link  <a 
                    href='./HilassouARolandSanou_CV.pdf' download={'HilassouARolandSanou_CV.pdf'}
                    >
                        <FontAwesomeIcon icon = {faDownload}/>
                    </a>
                    </p>

                </div>

            </div>
        
        <Loader type ='pacman'/>
        </>

    )

}

export default Skills