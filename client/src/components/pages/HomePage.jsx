import Card from "../Card"
import "../../styles/homepage.css"

function HomePage (){
    return (
        <section className="homepage">
        <h1>Rick and Morty</h1>
        <input type="text" placeholder="Trouvez un personnage..." id="recherche"></input>
        <div>
        <Card />
        <Card />
        <Card />
        </div>
        </section>
    )
}

export default HomePage;