import  imageJ  from '../assets/JohnImageAboutUs.jpg'
import  imageK  from '../assets/KyleImageAboutUs.jpg'
import  videoM  from '../assets/feelingDreamy7Animated_v=0.1.mp4'

const About = () => {
    return(
    <div>
        <h1>About Us</h1>

        <p>Our company began when the three of us discovered
            we all enjoy stealing cats. We decided it would be
            fun to steal cats and sell them for a profit.</p>
        <div>
            <h5>Mark</h5>
            <video src={videoM} />
        </div>
        <div>
            <h5>John</h5>
            <img id='imgJ' src={imageJ} />
        </div>
        <div>
            <h5>Kyle</h5>
            <img id='imgK' src={imageK} />
        </div>
    </div>
)}

export default About