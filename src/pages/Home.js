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
      title: 'aaa',
      info: 'AAA',
    },
    {
      id: 2,
      title: 'bbb',
      info: 'BBB',
    },
    {
      id: 3,
      title: 'ccc',
      info: 'CCC',
    },
    {
      id: 4,
      title: 'ddd',
      info: 'DDD',
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
                className="faq-item"
                onClick={() => setActiveQuestion(question)}
              >
                <h3>{question.title}</h3>
              </div>
            ))}
          </div>
          <div className="faq__answers">
            {activeQuestion && (
              <div className="faq-info">
                <p>{activeQuestion.title}</p>
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
