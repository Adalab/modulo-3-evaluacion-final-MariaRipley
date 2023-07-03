import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  list: PropTypes.array,
};

CharacterList.defaultProps = {
  list: ["Personaje 1", "Personaje 2", "Personaje 3"],
};

export default CharacterList;
