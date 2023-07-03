//react
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, matchPath } from "react-router-dom";
//styles
import "../styles/App.scss";
//images
import logo from "../images/logo.png";
//services
import ls from "../services/localStorage";
import objectAPI from "../services/fetch";
//components
import CharacterDetail from "./CharacterDetail";
import Landing from "./Landing";

function App() {
  // state
  const [characterList, setCharacterList] = useState(
    ls.get("characterList", [])
  );
  const [searchCharacter, setSearchCharacter] = useState(
    ls.get("searchCharacter", "")
  );
  const [searchSpecies, setSearchSpecies] = useState("all");

  //filters
  const filteredCharacters = characterList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchCharacter.toLowerCase())
    )
    .filter((eachCharacter) => {
      if (searchSpecies === "all" || searchSpecies === "") {
        return true;
      } else {
        return eachCharacter.species === searchSpecies;
      }
    });

  // effects
  useEffect(() => {
    objectAPI.getDataApi().then((dataApi) => {
      const cleanData = dataApi.results.map((eachCharacter) => {
        const newData = {
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          status: eachCharacter.status,
          origin: eachCharacter.origin.name,
          episode: eachCharacter.episode,
        };
        return newData;
      });

      const sortedData = [...cleanData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCharacterList(sortedData);
      ls.set("characterList", sortedData);
    });
  }, []);

  useEffect(() => {
    ls.set("searchCharacter", searchCharacter);
  }, [searchCharacter]);

  // render

  // handler
  const handleFilter = (varName, varValue) => {
    if (varName === "name") {
      setSearchCharacter(varValue);
    } else if (varName === "species") {
      setSearchSpecies(varValue);
    }
  };

  // contact info
  const { pathname } = useLocation();

  const routeData = matchPath("character/:characterId", pathname);

  const characterId = routeData?.params.characterId;

  const characterData = characterList.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <>
      <header className="header">
        <img className="header__img" src={logo} alt="Logo de Rick and Morty" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                searchCharacter={searchCharacter}
                searchSpecies={searchSpecies}
                handleFilter={handleFilter}
                filteredCharacters={filteredCharacters}
              />
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterData={characterData} />}
          />
        </Routes>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
