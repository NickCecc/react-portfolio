import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Card from "../Card"
import picture from "../../assets/images/DatabaseConnection.png"


const Projects= () => {
    return (
        <div className={"container projects-page"}>
            <div className={"text-zone"}>
                <h1>
                    <AnimatedLetters
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={16}
                    ></AnimatedLetters>
                </h1>
                <p>
                    This is where all of my projects will be
                </p>
                <Card
                title={"This is a sample project"}
                imageUrl={picture}
                body={"Hello my name is nicholas. how are you"}
                ></Card>

            </div>

        </div>
    )


}


export default Projects