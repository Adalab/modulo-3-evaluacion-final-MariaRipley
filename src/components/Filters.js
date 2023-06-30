function Filters(props) {
  return (
    <form action="./">
      <input
        type="text"
        placeholder="¿Qué personaje buscas?"
        name="searchCharacter"
        id="searchCharacter"
        value={props.searchCharacter}
        onInput={props.handleNameInput}
      />
    </form>
  );
}

export default Filters;
