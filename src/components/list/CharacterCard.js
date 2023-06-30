import "../../styles/character.scss";

function CharacterCard({ character }) {
  return (
    <article className="characterCard">
      <img
        className="characterCard__img"
        src={character.image}
        alt="Imagen del personaje"
      />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </article>
  );
}

export default CharacterCard;
