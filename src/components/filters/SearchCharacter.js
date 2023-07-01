function SearchCharacter({ searchCharacter, handleFilter }) {
  const handleNameInput = (ev) => {
    handleFilter("name", ev.target.value);
    // setSearchCharacter(ev.target.value);
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

export default SearchCharacter;
