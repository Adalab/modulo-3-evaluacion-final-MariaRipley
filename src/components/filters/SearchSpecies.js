import PropTypes from "prop-types";

function SearchSpecies({ handleFilter, searchSpecies }) {
  const handleSpeciesInput = (ev) => {
    ev.preventDefault();
    handleFilter("species", ev.target.value);
  };
  return (
    <select
      defaultValue={"all"}
      className="input speciesSelect"
      onChange={handleSpeciesInput}
    >
      <option value="all">Filtra por especie</option>
      <option value="Human">Humano</option>
      <option value="Alien">Alien</option>
    </select>
  );
}

SearchSpecies.propTypes = {
  handleFilter: PropTypes.func,
  searchSpecies: PropTypes.string,
};

SearchSpecies.defaultProps = {
  handleFilter: () => {
    console.log("Función manejadora de los filtros");
  },
  searchSpecies: "Humano",
};

export default SearchSpecies;
