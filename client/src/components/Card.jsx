import "../styles/card.css"

function Card (){
    return (
        <figure className="card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
        <figcaption>Rick Sanchez</figcaption>
        </figure>
    )
}

export default Card;