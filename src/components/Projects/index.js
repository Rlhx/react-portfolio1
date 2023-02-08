import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Projects = () =>{

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
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','r','o','j','e','c','t','s']}
                        idx ={15}/>
                    </h1>
                    <p>

                    </p>

                </div>

            </div>
        
        <Loader type ='pacman'/>
        </>

    )

}

export default Projects