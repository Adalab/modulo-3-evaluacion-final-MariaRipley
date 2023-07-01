import "../../styles/character.scss";

function CharacterCard({ character }) {
  return (
    <a href={"/character/" + character.id}>
      <article className="characterCard">
        <img
          className="characterCard__img"
          src={character.image}
          alt="Imagen del personaje"
        />
        <h2 className="characterCard__name">{character.name}</h2>
        <p className="characterCard__species">{character.species}</p>
      </article>
    </a>
  );
}

export default CharacterCard;
