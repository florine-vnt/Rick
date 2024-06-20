import Card from "../Card";
import "../../styles/homepage.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useTheme from "../hooks/useTheme";

function HomePage() {
  const data = useLoaderData(); 
  console.log(data);
  const [text, setText] = useState("");
  const {theme} = useTheme();

  const filteredArray = data.results.filter((item) => (
    item.name.toLowerCase().includes(text)
  ))


  function handleChange(e) {
    setText(e.target.value.toLowerCase());
  }
    
  return (
    <section className="homepage">
      <h1>Rick and Morty</h1>
      <input
        type="text"
        placeholder="Trouvez un personnage..."
        id="recherche"
        // value={text}
        onChange={handleChange}
      ></input>
      <div>
        <ul>
          {filteredArray.length ? (
          filteredArray.map((item) => (
            <li key={item.id}>
              <Card data={item} key={item.id} image={item.image} name={item.name} id={item.id}/>
            </li>
          ))) : <h1>No results</h1>}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
