import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
const About = () => {
    return(
        <div className={"container about-page"}>
            <div className={"text-zone"}>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        ></AnimatedLetters>
                </h1>
                <p>
                    I am nick and i am 19
                </p>
                <p>
                    Another paragraph goes here
                </p>
                <p>
                    Another paragraph goes here
                </p>

            </div>

        </div>
    )
}

export default About