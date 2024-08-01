import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header className="header">
      {/* <!-- Jméno a příjmení: Petr Bednarski -->
  <!-- E-mail: petrbednarski@seznam.cz -->
  <!-- Discord: pettik_ (PetrB) -->
  <!-- Github.com: https://github.com/pettik --> */}
      <div className="nav__container">
        <NavLink to="/" className="logo">
          <FaGithub className="logo-icon" /> Github<span>UserFinder</span>
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'nonActiveLink'
            }
          >
            Domů
          </NavLink>
          <br />
          <NavLink
            to="/github-profiles"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'nonActiveLink'
            }
          >
            GithubUserFinder App
          </NavLink>
          <br />
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'nonActiveLink'
            }
          >
            O projektu
          </NavLink>
          <br />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
