function Header({ logo }) {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Logo de Rick and Morty" />
    </header>
  );
}

export default Header;
