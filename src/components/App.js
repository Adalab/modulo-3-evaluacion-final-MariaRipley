//react
import { useEffect, useState } from "react";
//styles
import "../styles/App.scss";
//images
import logo from "../images/logo.png";
//services
import ls from "../services/localStorage";
import objectAPI from "../services/fetch";
//components
import CharacterList from "./list/CharacterList";

function App() {
  // state
  const [characterList, setCharacterList] = useState(
    ls.get("characterList", [])
  );
  const [searchCharacter, setSearchCharacter] = useState(
    ls.get("searchCharacter", "")
  );

  // effects
  useEffect(() => {
    objectAPI.getDataApi().then((dataApi) => {
      const cleanData = dataApi.results.map((eachCharacter) => {
        const newData = {
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
        };
        return newData;
      });
      setCharacterList(cleanData);
      ls.set("characterList", cleanData);
    });
  }, []);

  useEffect(() => {
    ls.set("searchCharacter", searchCharacter);
  }, [searchCharacter]);

  // render

  // handler
  const handleNameInput = (ev) => {
    setSearchCharacter(ev.target.value);
  };

  return (
    <>
      <header className="header"></header>
      <main className="main">
        <section className="main__hero">
          <img src={logo} alt="Logo de Rick and Morty" />
        </section>
        <section className="main__form">
          <form action="./">
            <input
              type="text"
              placeholder="¿Qué personaje buscas?"
              name="searchCharacter"
              id="searchCharacter"
              value={searchCharacter}
              onInput={handleNameInput}
            />
          </form>
        </section>
        <section className="main__list">
          <CharacterList list={characterList} />
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
