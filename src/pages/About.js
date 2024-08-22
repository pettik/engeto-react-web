import './About.css';

const About = () => {
  return (
    <main className="container">
      <section className="about__container">
        <div className="about__wrapper">
          <h2>
            O projektu <span>GithubUserFinder</span>
          </h2>
          <p>
            Tento projekt vznikl jako závěrečný úkol v rámci kurzu{' '}
            <span className="bold">"React" </span>
            pořádaného společností <span className="bold">Engeto</span>. Cílem
            projektu je demonstrovat schopnost vytvářet vícestránkové webové
            aplikace pomocí frameworku React, a to s využitím moderních
            vývojářských praktik a technik.
          </p>
          <p>
            Aplikace <span className="bold">GithubUserFinder</span> umožňuje
            vyhledávat uživatele na GitHubu a zobrazovat o nich základní
            informace, které jsou získány z veřejného GitHub API. Tento projekt
            je navržen tak, aby zlepšil schopnost studentů pracovat s externími
            API, spravovat stav aplikace a vytvářet dynamické uživatelské
            rozhraní.
          </p>
          <p>
            Projekt rovněž slouží jako praktická ukázka využití konceptů jako
            jsou komponenty, stavové řízení, a práce s datovými toky v rámci
            moderní aplikace.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
