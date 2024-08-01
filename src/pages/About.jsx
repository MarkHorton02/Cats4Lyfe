import  imageJ  from '../assets/JohnImageAboutUs.jpg'

// import  imageK  from '../assets/KyleImageAboutUs.jpg'
// import  imageM  from '../assets/MarkImageAboutUs.jpg'

const About = () => {
    return(
    <div>
        <h1>About Us</h1>

        <p>Our company began when the three of us discovered
            we all enjoy stealing cats. We decided it would be
            fun to steal cats and sell them for a profit.</p>
        <div>
            <h5>Mark</h5>
            {/* <img src={imageM} /> */}
        </div>
        <div>
            <h5>John</h5>
            <img src={imageJ}></img>
        </div>
        <div>
            <h5>Kyle</h5>
            {/* <img src={imageK} /> */}
        </div>
    </div>
)}

export default About