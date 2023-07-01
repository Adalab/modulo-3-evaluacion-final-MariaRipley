import SearchCharacter from "./SearchCharacter";

function Filters({ searchCharacter, handleFilter }) {
  return (
    <form>
      <SearchCharacter
        searchCharacter={searchCharacter}
        handleFilter={handleFilter}
      />
    </form>
  );
}

export default Filters;
