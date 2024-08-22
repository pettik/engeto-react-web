import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <ul>
          <li>
            <Link to="/" className="footer__logo">
              <FaGithub className="logo-icon" /> Github<span>UserFinder</span>
            </Link>
          </li>
          <li>
            <ul className="footer__links">
              <li>
                <Link to="/">Domů</Link>
              </li>
              <li>
                <Link to="/github-profiles">GithubUserFinder App</Link>
              </li>
              <li>
                <Link to="/about">O projektu</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__social">
              <li>Autor:</li>
              <li>
                <Link to="https://github.com/pettik">
                  <FaGithubSquare />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/petr-b-2b433a167">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <p>&#169; Bednarski P. 2024. All rigths reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
