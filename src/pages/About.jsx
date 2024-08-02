import { faker} from "@faker-js/faker";
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
            <h4>Mark</h4>
            <video src={videoM} />
            <p>Bio: {faker.person.bio()}</p>
        </div>
        <div>
            <h4>John</h4>
            <img id='imgJ' src={imageJ} />
            <p>Bio: {faker.person.bio()}</p>
        </div>
        <div>
            <h4>Kyle</h4>
            <img id='imgK' src={imageK} />
            <p>Bio: {faker.person.bio()}</p>
        </div>
    </div>
)}

export default About