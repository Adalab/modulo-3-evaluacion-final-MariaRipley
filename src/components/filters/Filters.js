import SearchCharacter from "./SearchCharacter";
import SearchSpecies from "./SearchSpecies";
import "../../styles/layout/form.scss";
import wubba from "../../images/wubba.jpg";
import PropTypes from "prop-types";

function Filters({
  searchCharacter,
  handleFilter,
  filteredCharacters,
  searchSpecies,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderMessage = () => {
    if (searchCharacter && filteredCharacters.length === 0) {
      return (
        <>
          <img className="messageImg" src={wubba} alt="Rick triste" />
          <p className="errorSearchMessage">
            No hay ningún personaje que coincida con la palabra "
            {searchCharacter}"
          </p>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
        id="searchForm"
        name="searchForm"
      >
        <SearchCharacter
          searchCharacter={searchCharacter}
          handleFilter={handleFilter}
        />
        <SearchSpecies
          searchSpecies={searchSpecies}
          handleFilter={handleFilter}
        />
      </form>
      {renderMessage()}
    </>
  );
}

Filters.propTypes = {
  searchCharacter: PropTypes.string,
  handleFilter: PropTypes.func,
  filteredCharacters: PropTypes.array,
  searchSpecies: PropTypes.string,
};

Filters.defaultProps = {
  searchCharacter: "Rick",
  handleFilter: () => {
    console.log("Función manejadora de los filtros");
  },
  filteredCharacters: {
    name: "Rick Sanchez",
    species: "Human",
  },
  searchSpecies: "Human",
};

export default Filters;
