import './GitHubFinder.css';
import { useState, useEffect } from 'react';

const GitHubFinder = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = event => {
    event.preventDefault();
    if (username.trim() === '') {
      return;
    }

    const url = `https://api.github.com/users/${username}`;
    setLoading(true);
    setError(false);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setLogin(data.login);
        setName(data.name);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section className="container">
      <div className="container__app">
        <h1>GithubUserFinder</h1>
        <form onSubmit={handleSearch}>
          <div className="github__heading__wrapper">
            <span className="github__heading">github.com/</span>
            <input
              type="text"
              placeholder="Zadejte GitHub uživatelské jméno"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <button type="submit">Vyhledat</button>
        </form>

        {loading ? (
          <h2 className="loading_heading">Načítání...</h2>
        ) : error ? (
          <h2>Uživatel {username} nenalezen.</h2>
        ) : (
          <>
            <h2>Login: {login}</h2>
            <h2>Jméno: {name}</h2>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubFinder;
