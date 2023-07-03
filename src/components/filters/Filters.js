import SearchCharacter from "./SearchCharacter";

function Filters({ searchCharacter, handleFilter, filteredCharacters }) {
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
    </form>
  );
}

export default Filters;
