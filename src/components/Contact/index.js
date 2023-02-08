import  emailjs  from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact= () =>{
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const timeoutIdRef = useRef(null);
    const refForm = useRef()

    useEffect(() =>{
     timeoutIdRef.current= setTimeout(()=>{
             setLetterClass('text-animate-hover');
         }, 3000);
         return ()=>clearTimeout(timeoutIdRef);
    }, [])


    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'contact_service',
            'template_l9r6k3r',
            refForm.current,
            'LxUi97T7q32p7DDiY'
        )
        .then(
            () =>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
    }


    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx ={15}/>
                </h1>
                <p>
                    I'm interested in a summer internship or a part time job opportunity-
                    especially ambitious and constructive. However, if you have other request
                    orquestion feel free to contact me using below from either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                required />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                required />
                            </li>
                            <li>
                                <textarea 
                                name="message" 
                                placeholder="Message" 
                                required></textarea>
                            </li>
                            <li>
                                <input 
                                type="submit"
                                className='flat-button'
                                value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact
