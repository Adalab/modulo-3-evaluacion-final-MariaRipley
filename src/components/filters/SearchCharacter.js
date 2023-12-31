import PropTypes from "prop-types";

function SearchCharacter({ searchCharacter, handleFilter }) {
  const handleNameInput = (ev) => {
    handleFilter("name", ev.target.value);
  };
  return (
    <input
      className="input nameInput"
      type="text"
      placeholder="¿Qué personaje buscas?"
      name="searchCharacter"
      id="searchCharacter"
      value={searchCharacter}
      onInput={handleNameInput}
    />
  );
}

SearchCharacter.propTypes = {
  searchCharacter: PropTypes.string,
  handleFilter: PropTypes.func,
};

SearchCharacter.defaultProps = {
  searchCharacter: "Rick",
  handleFilter: () => {
    console.log("Función manejadora de los filtros");
  },
};

export default SearchCharacter;
