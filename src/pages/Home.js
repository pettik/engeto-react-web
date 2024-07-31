import './Home.css';
import { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
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

  const getRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * appProperties.length);
    const word = appProperties[randomIndex];
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const [title, setTitle] = useState(getRandomTitle());

  useEffect(() => {
    setTitle(getRandomTitle());
  }, []);

  return (
    <main className="container">
      <section className="hero">
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
      </section>
    </main>
  );
};

export default Home;
