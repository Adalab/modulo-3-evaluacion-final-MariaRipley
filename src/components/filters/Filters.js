import SearchCharacter from "./SearchCharacter";
import SearchSpecies from "./SearchSpecies";

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
        <p className="errorSearchMessage">
          No hay ningún personaje que coincida con la palabra "{searchCharacter}
          "
        </p>
      );
    }
    return null;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SearchCharacter
        searchCharacter={searchCharacter}
        handleFilter={handleFilter}
      />
      {renderMessage()}
      <SearchSpecies
        searchSpecies={searchSpecies}
        handleFilter={handleFilter}
      />
    </form>
  );
}

export default Filters;
