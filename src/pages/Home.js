import './Home.css';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import {
  FaSearch,
  FaInfoCircle,
  FaUserFriends,
  FaSyncAlt,
} from 'react-icons/fa';

import { FiGithub } from 'react-icons/fi';

const Home = () => {
  const appProperties = [
    'rychlá',
    'spolehlivá',
    'nová',
    'bezpečná',
    'přesná',
    'intuitivní',
    'aktualizovaná',
    'efektivní',
  ];

  const benefits = [
    {
      icon: <FaSearch />, // Ikona pro rychlé vyhledávání
      title: 'Rychlé vyhledávání',
      description:
        'Najděte GitHub účty během několika vteřin pomocí našeho vyhledávacího nástroje.',
    },
    {
      icon: <FaInfoCircle />, // Ikona pro detailní informace
      title: 'Detailní profily',
      description:
        'Získejte přehledné a detailní informace o uživatelích, včetně jejich projektů a příspěvků.',
    },
    {
      icon: <FaUserFriends />, // Ikona pro uživatelsky přívětivé rozhraní
      title: 'Jednoduché a intuitivní',
      description:
        'Uživatelsky přívětivé rozhraní, které je snadné používat pro všechny úrovně zkušeností.',
    },
    {
      icon: <FaSyncAlt />, // Ikona pro aktualizované údaje
      title: 'Aktualizované údaje',
      description:
        'Vždy aktuální informace přímo z GitHub API, abyste měli přístup k nejnovějším údajům.',
    },
  ];

  const BenefitItem = ({ icon, title, description }) => (
    <div className="benefit-item">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="bottom_line"></div>
    </div>
  );

  const getRandomTitle = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * appProperties.length);
    const word = appProperties[randomIndex];
    return word.charAt(0).toUpperCase() + word.slice(1);
  }, []);

  const [title, setTitle] = useState(getRandomTitle());

  useEffect(() => {
    setTitle(getRandomTitle());
  }, []);

  return (
    <main className="container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__container">
          <div className="logo-container">
            <FaMagnifyingGlass className="magnifying__icon" />
            <FiGithub className="gihub__center__icon" />
          </div>
          <h1>
            Aplikace <span>GithubUserFinder</span>
          </h1>
          <h3>
            <span>{title}</span> aplikace pro vyhledávání Github uživatelů.
          </h3>
          <button className="btn__home">
            <Link to="/github-profiles">
              <span>Vyhledat uživatele</span>
              <FaMagnifyingGlass className="btn__magnifying__icon" />
            </Link>
          </button>
        </div>
      </section>
      {/* BENEFITS SECTION */}
      <section className="benefits__section">
        <div className="benefits__container">
          {benefits.map((benefit, index) => (
            <BenefffitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
