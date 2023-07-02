import "../../styles/character.scss";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link to={"/character/" + character.id}>
      <article className="characterCard">
        <img
          className="characterCard__img"
          src={character.image}
          alt="Imagen del personaje"
        />
        <h2 className="characterCard__name">{character.name}</h2>
        <p className="characterCard__species">{character.species}</p>
      </article>
    </Link>
  );
}

export default CharacterCard;
