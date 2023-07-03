function SearchSpecies({ handleFilter, searchSpecies }) {
  const handleSpeciesInput = (ev) => {
    ev.preventDefault();
    handleFilter("species", ev.target.value);
  };
  return (
    <select
      className="speciesSelect"
      onChange={handleSpeciesInput}
      value={searchSpecies}
    >
      <option value="all">Filtra por especie</option>
      <option value="Human">Humano</option>
      <option value="Alien">Alien</option>
    </select>
  );
}

export default SearchSpecies;
