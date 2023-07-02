import Filters from "./filters/Filters";
import CharacterList from "./list/CharacterList";

function Landing({ searchCharacter, handleFilter, filteredCharacters }) {
  return (
    <>
      <section className="main__form">
        <Filters
          searchCharacter={searchCharacter}
          handleFilter={handleFilter}
          filteredCharacters={filteredCharacters}
        />
      </section>
      <section className="main__list">
        <CharacterList list={filteredCharacters} />
      </section>
    </>
  );
}

export default Landing;
