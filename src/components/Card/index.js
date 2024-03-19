import "./index.scss";
import {Link} from "react-router-dom";

const Card = ({title, imageUrl, body}) => {
    return (
        <div className={"card-container"}>
            <div className={"image-container"}>
                <div className={"single-img"}>
                    <img src={imageUrl} alt={""}/>
                    <Link to="/contact" className="view-more">View More</Link>
                </div>

            </div>
            <div className={"card-content"}>
                <div className={"card-title"}>
                    <h3>{title}</h3>
                </div>
                <div className={"card-body"}>
                    {body}
                </div>


            </div>


        </div>
    )
}

export default Card