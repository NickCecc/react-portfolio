import {Link} from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','N', 'i', 'c', 'h', 'o', 'l', 'a', 's']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={"container home-page"}>
            <div className={"text-zone"}>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br></br>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>


                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={15}/>
                    <br></br>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={jobArray}
                                     idx={24}/>
                </h1>
                <h2>Frontend Developer / JavaScript Expert</h2>
                <Link to={"/contact"} className={"flat-button"}>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home;