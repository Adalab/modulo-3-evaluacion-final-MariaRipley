import Filters from "./filters/Filters";
import CharacterList from "./list/CharacterList";
import PropTypes from "prop-types";

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

Landing.propTypes = {
  searchCharacter: PropTypes.string,
  handleFilter: PropTypes.func,
  filteredCharacters: PropTypes.array,
};

export default Landing;
