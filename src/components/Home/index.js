import {Link} from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import Three from "../ThreeJS/HomeCube";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const codeArray = ['C', 'o', 'd', 'e', '.']
    const jobArray = ['C', 'r', 'e', 'a', 't', 'e','.']
    const student = ['C', 'o', 'n', 'q','u', 'e', 'r','.']
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass("text-animate")
        }, 4000)

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={"container home-page"}>
            <div className={"content-wrapper"}>
                {/* Left Side: Letters */}
                <div className={"text-zone"}>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                                         strArray={codeArray}
                                         idx={15}/>
                        <br></br>
                        <AnimatedLetters letterClass={letterClass}
                                         strArray={jobArray}
                                         idx={16}/>
                        <br></br>
                        <AnimatedLetters letterClass={letterClass}
                                         strArray={student}
                                         idx={17}/>
                    </h1>
                    <br></br>
                    <h2>Nicholas Cecchin,</h2>
                    <h2>Computer Science & Software Engineering</h2>
                    <Link to={"/contact"} className={"flat-button"}>CONTACT ME</Link>
                </div>

                {/* Right Side: 3D Object */}
                <div className={"object-zone"}>
                    <Three/> {/* Your 3D object component */}
                </div>
            </div>
        </div>
    );
}

export default Home;