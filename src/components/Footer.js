import React from "react";
import BigLogo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return(
    <div id="footer">
        <div className="footer-container">
            <img className="footer-img" height="100px" src={BigLogo} alt="Darley large logo" />
            <ul className="footer-button-ul">
                <li className="button footer-button" > 
                    <a href="https://calabasas-speech-react.vercel.app/">Visit the Website</a>
                </li>
            </ul>
            <ul className="footer-icons-ul">
                <li>
                    <a href="https://www.daryaleylian.com" target="_blank" rel="noreferrer">
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 632 664" className="logo-for-hover footer-icons">
                        <path className="cls-1" d="M567,292.5c-28.22,0-30.41,28-49,28-6.3,0-18-6.71-18-17V137a5,5,0,0,0-5-5H289.1c-18.75,0-18-9.86-18-16,0-19.74,15-24.75,15-51,0-39.52-26.6-65-66-65-38.41,0-61,24.19-61,65,0,28.22,28,30.41,28,49,0,6.3-6.71,18-17,18H5a5,5,0,0,0-5,5V238.5c0,10.29,11.7,17,18,17,18.59,0,20.78-28,49-28,40.81,0,65,22.59,65,61,0,39.4-25.48,66-65,66-26.25,0-31.26-15-51-15-6.14,0-16-.75-16,18V527a5,5,0,0,0,5,5H209.1c18.75,0,18,9.86,18,16,0,19.74-15,24.75-15,51,0,39.52,26.6,65,66,65,38.41,0,61-24.19,61-65,0-28.22-28-30.41-28-49,0-6.3,6.72-18,17-18H495a5,5,0,0,0,5-5V422.5c0-18.75,9.86-18,16-18,19.74,0,24.75,15,51,15,39.52,0,65-26.6,65-66C632,315.09,607.81,292.5,567,292.5Z" transform="translate(0 0)"/>
                        <path d="M186.19,404.66l1.42-.36,3.93-3.83,4.64-10L198,388l1.78-5.35,1.08-.73,2.49-7.49.73-.37.34-2.14,1.08-1.08,2.51-8.2,1.07-1.07,3.57-10.37,1.07-.71,2.85-8.23,1.81-2.14,1-4.64,2.15-6.08,1.07-.71.36-2.14,1.79-2.51,2.85-9.3,2.15-5.75v-1.42l1.78-1.8,1.44-5,4.29-10.35,1.79-2.51,2.14-5.35V280.3l5-10.73.7-2.86,2.86-4.63,2.15-5.37,3.22-4.64,3.83-3.83,2.86-4.64,8.93-7.52,6.88-4.46,1.44-1.78h1.78v-1.08h1.44l4.64-2.14,11.79-2.86,5.36,1.07,3.57,2.49,2.85,8.23,1.8,5.75-1.07,5.75L308,251.34l-8.59,7.86L292,268.5l-.71,2.49L288,275.7l-1.44,3.59-2.14,2.16-3.57,10.72v1.42h-1.11l-.36,4.29-2.15,4.29-2.13,2.15v1.42h-.73v1.8h-1.07V309h-.71l-2.86,10.37-1.07,2.85-1.07.71-1.08,5.75-4.29,8.94h-.71l-3.56,10-4.66,11.5-.39,2.69-4.63,9.58L244,381.7l-4.66,10.73-3.92,10.35-2.86,3.59-.36,2.15-2.13,2.14-1.8,3.57v1.42l-1.79,1.8v1.42l-2.14,1.8-2.86,5-.71,3.2.37,2.51,3.2,5,9.58,6.07,1.07,1.42,3.57,1.44,2.51,1.78,9.58,2.86,5,1.43,11.08,1.08,11.5-1.44,4.27-1.07,1.44-1.08,7.15-1.42,9.58-5.75,2.49-.34,8.95-6.79,8.21-8.58,7.51-6.79.71-2.15,3.93-3.56,1.07-3.59,5-6.07,5-6.79,1.38-.59.36-2.51,3.93-8.93,2.15-2.15,1.78-5.35,1.78-1.8,1.44-5.35L362.13,360l.37-5.75h.71l1.07-5.75,3.22-7.15,1.42-11.5,1.44-10.71,1.07-11.79,1.07-11.08-1.78-11.5V273l-.73-5.37-2.85-11.5-4.64-10.37L357.13,235l-2.51-3.83-7.13-7.15-4.66-2.86-6.78-6.08-2.52-.72v-1.06h-1.78v-.73h-1.42v-.71l-9.58-3.22-11.5-3.56-9.58-1.44-12.14-.36-12.15.73-10,2.49-11.07,3.22-10.37,4.64-9.3,5.36-10.35,5.75-7.15,8.23-6.36,7.62-6.37,7.52-.34,2.85-1.44.73L201.2,256l-1.44,1.78-.71,2.86-1.78,1.43-.73,2.5-1.78,2.14-.71,4.3-.73.71v2.85l-3.64,10.35-.71,11.5,1.08,11.08,3.2,11.08,1.8,5.35v5.37L191.83,334l-9.3,6.44-2.85,2.86-2.15.36L175.75,345l-6.08,1.44-3.58-1.78-1.79-2.51-1.41-.37-1.08-3.93-2.8-5.4-.36-2.51-2.49-3.57-1.08-5.75L154,308.15l-.73-11.07V285.29l2.15-10.74,2.51-11.5,2.15-10h1v-1.44h.73v-1.78h.71l1.44-5,4.27-7.85,1.07-1.08.37-2.14,3.83-4.64,1.78-3.59,2.52-.71,3.56-4.29,2.15-1.42v-1.44l2.85-3.22L187.5,212l4.29-3.83,2.49-.71,8.22-8.22,4.64-3.93,9.59-5.75,10.37-5,1.78-1.78,10.35-3.56,2.51-.37v-.71l11.19-4L264,172l11.08-1.44,10-1.42,12.5-.36,11.5,1.07h2.49l2.85,1.07,5.75.37,10,3.2,9.58,2.51.71,1.07,3.93,1.08,1.07,1.07,6.45,1.07V182l7.85,3.57,1.79,2.15,2.51.7,2.49,3.59,2.51,1.07,1.44,1.79,2.13.36,2.14,3.22,5,3.2,2.15,3.93,6.44,7.88,3.93,4.27,6.42,9.59v1.43h1.08v1.79h.71v1.43l3.83,8.94,4.27,10.71,1.44,11.08,1.78,4.66,1.08,11.06.36,11.8.71,5.35-1.44,5.75.73,11.08v6.08l-1.44,9.27-1.07.73L409.71,340,406.85,351l-3.22,11.08-3.1,10.73-3.95,10.74-2.86,5.35-3.93,10L388,401.08l-.37,2.85-3.22,4.66v1.78l-1.41.37-.37,1.78h-.71v1.78h-.57v1.42l-1.44.73-.71,2.15-1.44.71-1.07,2.49-5.35,5.75L371,430l-1.78,1.07-.37,2.51-2.15,1.79-1.41.36-.37,2.13-3.22,2.51v1.07l-7.49,8.94L346,458.27,337,465.06l-5,2.86-1.78,2.14h-1.79l-.72,1.79h-1.42l-1.8,2.14-5,2.88-10.35,3.93-11.79,3.56-10.73,3.57h-5L278.12,489H274.9l-.36-1.07-5.75-.71-11.5,1.43-.73-.72-11.5-2.13-5.75-1.8-.71-1.08-5.75-1.07-9.59-5.35-3.2-2.51-4.29-1.07-1.44-2.13-2.13-.36-.72-1.44-2.15-.35-2.49-3.58L204.33,464l-1.42-2.5L199,460.42l-2.88-1.78-5.34,2.13-7.86,5.36h-1.08l-1.07,1.08-2.15.36-1.78,1.78-5.37,3.22-10,3.57-2.86,1.07H156.1l-.73.71-10,1.8-6.08,1.79-11.5.7L116,481.14h-5.75l-2.14-1.42-5.35-1.07-4.3-2.15H97l-5.08-2.87-7.86-7.15-9.39-9.3-3.84-9.58-3.22-11.5-.36-8.93,3.83-8.23.73-5.75L75.06,406l7.13-8.93L90.78,390l1.42-.34L98.64,385l10.71-2.86,5-1.78,11.5-.36L136.93,381h3.93l.71.71h2.51l9.59,5,5.75,2.51,2.85,2.15.37,1.07,2.51.35,9.58,6.07,5,3.22,5.75,2.15Zm-76.13,37.8,8.59,3.83,5,.71,11.79-1.07,7.86-.36v-.71l2.51-.35,9.29-5.75,6.06-5,.73-2.15-.37-2.13-4.29-5.36-3.56-2.74-2.52-.71-1.78-2.15-2.49-.73-2.15-2.14H143.3v-.71h-1.79l-.34-1.08-11.81-3.2-5.75-.36-5,1.07-5.75,2.15-6.44,4.27-2.86,4.66-.71,8.57.35,4.66,6.44,6.78Z"  transform="translate(0 0)"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="mailto:@daryaleylian@gmail.com"> 
                        <svg className="logo-for-hover-mail footer-icons" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 330.001 330.001" fill="white" >
                            <g   id="XMLID_348_">
                                <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
                                L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                                />
                                <polygon  id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
                            </g>
                        </svg>
                    </a> 
                </li>
                <li> 
                    <a target="_blank" href="https://github.com/dsleylian/calabasas-speech-react" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} size="2x" className="footer-icons"/>  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.linkedin.com/in/darya-leylian-a1a62057/" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="2x" className="footer-icons" />  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.instagram.com/darya.puzzledorffer/" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icons"/>  </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;