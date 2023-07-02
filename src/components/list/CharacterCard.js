import "../../styles/character.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAllergies } from "@fortawesome/free-solid-svg-icons";

function CharacterCard({ character }) {
  const getSpeciesIcon = () => {
    if (character.species === "Human") {
      return <FontAwesomeIcon icon={faUser} />;
    } else if (character.species === "Alien") {
      return <FontAwesomeIcon icon={faAllergies} />;
    } else {
      return null;
    }
  };
  return (
    <Link to={"/character/" + character.id}>
      <article className="characterCard">
        <img
          className="characterCard__img"
          src={character.image}
          alt="Imagen del personaje"
        />
        <h2 className="characterCard__name">{character.name}</h2>
        <div className="characterCard__species">{getSpeciesIcon()}</div>
      </article>
    </Link>
  );
}

export default CharacterCard;
