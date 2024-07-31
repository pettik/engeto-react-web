import './Home.css';
import { useState } from 'react';
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
  const [title, setTitle] = useState('Spolehlivá');

  return (
    <main className="container">
      <section className="hero">
        <div className="logo-container">
          <FaMagnifyingGlass className="magnifying__icon" />
          <FiGithub class="gihub__center__icon" />
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
