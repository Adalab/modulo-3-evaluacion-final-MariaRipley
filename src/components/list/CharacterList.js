import CharacterCard from "./CharacterCard";

function CharacterList({ list }) {
  const listLi = list.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id}>
        <CharacterCard character={eachCharacter} />
      </li>
    );
  });

  return <ul className="cardContainer">{listLi}</ul>;
}

export default CharacterList;
