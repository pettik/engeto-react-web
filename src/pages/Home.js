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

// HERO SECTION
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

  const getRandomTitle = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * appProperties.length);
    const word = appProperties[randomIndex];
    return word.charAt(0).toUpperCase() + word.slice(1);
  }, []);

  const [title, setTitle] = useState(getRandomTitle());

  useEffect(() => {
    setTitle(getRandomTitle());
  }, []);

  // BENEFITS SECTION
  const benefits = [
    {
      icon: <FaSearch />,
      title: 'Rychlé vyhledávání',
      description:
        'Najděte GitHub účty během několika vteřin pomocí našeho vyhledávacího nástroje.',
    },
    {
      icon: <FaInfoCircle />,
      title: 'Detailní profily',
      description:
        'Získejte přehledné a detailní informace o uživatelích, včetně jejich projektů a příspěvků.',
    },
    {
      icon: <FaUserFriends />,
      title: 'Jednoduché a intuitivní',
      description:
        'Uživatelsky přívětivé rozhraní, které je snadné používat pro všechny úrovně zkušeností.',
    },
    {
      icon: <FaSyncAlt />,
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

  // FAQ SECTION
  const questions = [
    {
      id: 1,
      title: 'Co je GithubUserFinder?',
      info: 'GithubUserFinder je aplikace pro vyhledávání uživatelů na GitHubu, vytvořená jako závěrečný projekt kurzu "React" na Engeto.cz.',
    },
    {
      id: 2,
      title: 'Jak používat GithubUserFinder?',
      info: 'Zadejte uživatelské jméno uživatele z GitHubu do vyhledávacího pole formuláře a klikněte na tlačítko načíst. Aplikace Vám zobrazí detailní informace o uživateli.',
    },
    {
      id: 3,
      title: 'Jak funguje úvodní stránka?',
      info: 'Úvodní stránka obsahuje dynamický text, který se mění náhodně při každém načtení stránky.',
    },
    {
      id: 4,
      title: 'Jaké technologie jsou použity?',
      info: 'Aplikace je postavena pomocí Reactu a využívá GitHub API pro získávání dat o uživatelích.',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

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
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="faq__section">
        <div className="faq__container">
          <div className="faq__tabs">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`faq-item ${
                  activeQuestion?.id === question.id ? 'active' : ''
                }`}
                onClick={() => setActiveQuestion(question)}
              >
                <h3>{question.title}</h3>
              </div>
            ))}
          </div>
          <div className="faq__answers">
            {activeQuestion && (
              <div className="faq-info">
                <h4>{activeQuestion.title}</h4>
                <p>{activeQuestion.info}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
