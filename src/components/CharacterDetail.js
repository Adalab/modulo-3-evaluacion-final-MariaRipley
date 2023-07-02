import { Link } from "react-router-dom";

function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div className="detailCardBorder">
        <Link to="/">Volver</Link>
        <div className="detailCard">
          <img
            className="detailCard__img"
            src={characterData.image}
            alt="Imagen del personaje"
          />
          <section>
            <h3>{characterData.name}</h3>
            <p>Status: {characterData.status}</p>
            <p>Species: {characterData.species}</p>
            <p>Origin: {characterData.origin}</p>
            <p>Episodes: {characterData.episode.length}</p>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="error">Lo sentimos, ese personaje no existe. </p>
        <Link to="/">Volver</Link>
      </div>
    );
  }
}

export default CharacterDetail;
