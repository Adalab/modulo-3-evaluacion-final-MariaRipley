import CharacterCard from "./CharacterCard";

function CharacterList({ list }) {
  const listLi = list.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id} className="liElements">
        <CharacterCard character={eachCharacter} />
      </li>
    );
  });

  return <ul className="cardsContainer">{listLi}</ul>;
}

export default CharacterList;
