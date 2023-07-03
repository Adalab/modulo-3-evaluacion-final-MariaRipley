import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSpaghettiMonsterFlying,
  faSkullCrossbones,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "../styles/characterDetail.scss";
import wubba from "../images/wubba.jpg";

function CharacterDetail({ characterData }) {
  const getSpeciesIcon = () => {
    if (characterData.species === "Human") {
      return <FontAwesomeIcon icon={faSmile} />;
    } else if (characterData.species === "Alien") {
      return <FontAwesomeIcon icon={faSpaghettiMonsterFlying} />;
    } else {
      return null;
    }
  };

  const getStatusIcon = () => {
    if (characterData.status === "Dead") {
      return <FontAwesomeIcon icon={faSkullCrossbones} />;
    } else if (characterData.status === "Alive") {
      return <FontAwesomeIcon icon={faThumbsUp} />;
    } else {
      return null;
    }
  };

  if (characterData) {
    return (
      <div className="detailCardBorder">
        <Link to="/" className="detailCardBorder__link">
          Volver
        </Link>
        <div className="detailCard">
          <img
            className="detailCard__img"
            src={characterData.image}
            alt="Imagen del personaje"
          />
          <section className="detailCard__text">
            <h3 className="detailCard__text--name">{characterData.name}</h3>
            <p className="detailCard__text--status">
              Status: {getStatusIcon()}
            </p>
            <p className="detailCard__text--species">
              Species: {getSpeciesIcon()}
            </p>
            <p className="detailCard__text--origin">
              Origin: {characterData.origin}
            </p>
            <p className="detailCard__text--episodes">
              Episodes: {characterData.episode.length}
            </p>
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

CharacterDetail.propTypes = {
  characterData: PropTypes.object,
};

CharacterDetail.defaultProps = {
  characterData: {
    image: { wubba },
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
    episodes: "31,",
  },
};

export default CharacterDetail;
