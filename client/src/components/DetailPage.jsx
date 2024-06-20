import { useLoaderData } from "react-router-dom";
import "../styles/detail-page.css"

function DetailPage (){
    const data = useLoaderData();

    return (
        <figure className="detail-page">
            {/* <h1>Plus d'infos sur le personnage</h1> */}
            <img src={data.image} alt="Rick & Morty charachter" />
            <section>
            <figcaption>
                <h1>{data.name}</h1>
                <p>{data.status === "Alive" ? "🟢" : "🔴"} - {data.species}</p>
            </figcaption>
            <figcaption>
                <p>Last known location :</p>
                <p>{data.location.name}</p>
            </figcaption>
            <figcaption>
                <p>First seen in :</p>
                <p>{data.episode[0]}</p>
            </figcaption>
            </section>
        </figure>
    )
}

export default DetailPage;

// First seen in : {episode[0]}