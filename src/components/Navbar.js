import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header className="header">
      <div className="nav__container">
        <Link to="/" className="logo">
          <FaGithub className="logo-icon" /> Github<span>Finder</span>
        </Link>
        <nav className="nav">
          <Link to="/">Domů</Link>
          <br />
          <Link to="/github-profiles">GithubFinder App</Link>
          <br />
          <Link to="/about">O projektu</Link>
          <br />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
