import './GitHubFinder.css';
import { useState } from 'react';

const GitHubFinder = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [bio, setBio] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [createdAt, setCreatedAt] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSearch = event => {
    event.preventDefault();
    if (username.trim() === '') {
      return;
    }

    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=10`;

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

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setLogin(userData.login);
        setName(userData.name);
        setAvatarUrl(userData.avatar_url);
        setBio(userData.bio);
        setFollowers(userData.followers);
        setFollowing(userData.following);
        setCreatedAt(new Date(userData.created_at).toLocaleDateString());
        setRepos(reposData);
        setUserFound(true);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(true);
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
              placeholder="Zadejte GitHub uživatelské jméno"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <button type="submit">Vyhledat</button>
        </form>

        {userFound && !loading && (
          <>
            <h2>Login: {login}</h2>
            <h2>Jméno: {name}</h2>
            {avatarUrl && (
              <img src={avatarUrl} alt="User avatar" className="user__avatar" />
            )}
            {bio && <p className="user__description">{bio}</p>}
            <div className="user__stats">
              <div>
                <h3>Sledující: {followers}</h3>
              </div>
              <div>
                <h3>Sleduje: {following}</h3>
              </div>
            </div>
            <p>Datum založení účtu: {createdAt}</p>

            <h3>Prvních 10 repozitářu uživatele {login} </h3>
            <div className="repos__wrapper">
              {repos.map(repo => (
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
                    Vytvořeno: {new Date(repo.created_at).toLocaleDateString()}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}

        {loading && <h2 className="loading_heading">Načítání...</h2>}
        {error && <h2>Uživatel {username} nenalezen.</h2>}
      </div>
    </section>
  );
};

export default GitHubFinder;
