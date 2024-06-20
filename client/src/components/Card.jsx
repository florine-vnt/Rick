import "../styles/card.css"
import { NavLink } from "react-router-dom";

function Card ({image, name, id}){
    return (
        <NavLink to={`/detail/${id}`} className="link-style">
        <figure className="card">
        <img src={image} alt="Rick & Morty charachter" />
        <figcaption>{name}</figcaption>
        </figure>
        </NavLink>
    )
}

export default Card;