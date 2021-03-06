import React from "react";
import BigLogo from '../images/logo.svg';
import sample_1 from '../images/cs-screenshot-1.png';
import sample_2 from '../images/cs-screenshot-2.png';
import sample_3 from '../images/cs-screenshot-3.png';
import recognition_1 from '../images/Nucamp-screenshot.png'
import recognition_2 from '../images/nucamp-honors-grad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Project(){

  return(
    <div id="home" className="project-container">
        <div className="big-logo">
            <img className="big-logo-img" height="300px" src={BigLogo} alt="Calabasas Speech large logo" />
        </div>
        <div className="project-content">
            <h2>About this Project</h2>
            <p>Calabasas Speech is a website for a made-up speech and language clinic. The website includes information about the clinic's approach to speech and language therapy, their staff and their specialties, as well as some free resources. I am a licensed Speech Language Pathologist, and therefore, the content and information in the Free Resources page is accurate - feel free to read through and use it! </p>
            <ul className="color-button-ul">
                <li className="color-button" > 
                    <a href="https://calabasas-speech-react.vercel.app/">Visit the Website</a>
                </li>
            </ul>
            <h2>Development tools</h2>
            <ul className="icons-ul">
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faReact} size="3x"/>    
                    <p>React</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faJs} size="3x"/>  
                    <p>Javascript</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <p>HTML</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faCss3} size="3x"/>
                    <p>CSS</p>
                </li>
            </ul>
            <h2>Screenshots</h2>
            <div className="project-samples">
                <img className="sample" height="200px" src={sample_1} alt="sample" />    
                <img className="sample" height="200px" src={sample_2} alt="sample" />    
                <img className="sample" height="200px" src={sample_3} alt="sample" />    
            </div>
            <h2>Video Walkthrough</h2>
            <div className="project-content-video">
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5etC6o95CzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
            </div>
            <h2>Recognition</h2> 
            <p>This project was <a className="nucamp-grad-link" href="https://www.nucamp.co/graduates/projects" target="_blank" rel="noreferrer" alt="nucamp graduate projects">showcased in my Nucamp graduation</a>, and qualified me to graduate with Honors. I was also mentioned in <a className="nucamp-grad-link" href="https://www.nucamp.co/blog/project-spotlight-darya-leylian" target="_blank" rel="noreferrer" >this article,</a> showcasing my project.</p> 
            <div className="recognition-content">
                <img className="recognition-image" src={recognition_1} alt="Nucamp screenshot" height="300px"/>
                <img src={recognition_2} alt="Nucamp graduation" height="300px"/>
            </div>
        </div>
        
    </div>
  )
}

export default Project;