import './GitHubFinder.css';
import { useState } from 'react';

const GitHubFinder = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [userData, setUserData] = useState({
    login: '',
    name: '',
    avatarUrl: '',
    bio: '',
    followers: 0,
    following: 0,
    createdAt: '',
    repos: [],
  });

  const handleSearch = event => {
    event.preventDefault();
    if (username.trim() === '') {
      return;
    }

    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `${userUrl}/repos?per_page=10`;

    setLoading(true);
    setError(false);

    Promise.all([fetch(userUrl), fetch(reposUrl)])
      .then(async ([userResponse, reposResponse]) => {
        if (!userResponse.ok) {
          throw new Error('User not found');
        }
        if (!reposResponse.ok) {
          throw new Error('Repositories not found');
        }

        const userDataResponse = await userResponse.json();
        const reposData = await reposResponse.json();

        setUserData({
          login: userDataResponse.login,
          name: userDataResponse.name,
          avatarUrl: userDataResponse.avatar_url,
          bio: userDataResponse.bio,
          followers: userDataResponse.followers,
          following: userDataResponse.following,
          createdAt: new Date(userDataResponse.created_at).toLocaleDateString(),
          repos: reposData,
        });
        setUserFound(true);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);

        if (error.message === 'User not found') {
          setError(
            'Uživatel nebyl nalezen, zkontrolujte prosím uživatelské jméno.'
          );
        } else if (error.message === 'Repositories not found') {
          setError(
            'Uživatel byl nalezen, ale nebyly nalezeny žádné repozitáře.'
          );
        } else {
          setError('Došlo k neočekávané chybě. Zkuste to prosím znovu.');
        }

        setUserFound(false);
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
              placeholder="Zadejte GitHub username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <button className="btn__search" type="submit">
            Vyhledat
          </button>
        </form>

        {userFound && !loading && (
          <>
            <div className="user__primary__info">
              <div className="user__primary__info-name">
                <h2>Login: {userData.login}</h2>
                <h2>Jméno: {userData.name}</h2>
              </div>
              {userData.avatarUrl && (
                <img
                  src={userData.avatarUrl}
                  alt="User avatar"
                  className="user__avatar"
                />
              )}
              {userData.bio && (
                <p className="user__description">{userData.bio}</p>
              )}
            </div>
            <div className="user__stats">
              <div>
                <h3>Sledující: {userData.followers}</h3>
              </div>
              <div>
                <h3>Sleduje: {userData.following}</h3>
              </div>
            </div>
            <p className="created">
              Datum založení účtu:{' '}
              <span className="bold">{userData.createdAt}</span>
            </p>

            <h3>
              První z repozitářu uživatele{' '}
              <span className="bold">{userData.login}</span>{' '}
            </h3>
            <div className="repos__wrapper">
              {userData.repos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo"
                >
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <p>
                    <span className="bold">Vytvořeno:</span>{' '}
                    {new Date(repo.created_at).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="bold">Upraveno:</span>{' '}
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}

        {loading && <h2 className="loading_heading">Načítání...</h2>}
        {error && <h2 className="loading_heading">{error}</h2>}
      </div>
    </section>
  );
};

export default GitHubFinder;
