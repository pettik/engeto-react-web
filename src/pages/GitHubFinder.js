import {useState, useEffect} from "react"

const GitHubFinder = () => {
  const url = "https://api.github.com/users/pettik";
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");

  useEffect( () => {
    fetch(url)
      .then( (response) => response.json() )
      .then( (data) =>{ 
        console.log(data);
        setLogin(data.login);
        setLogin(data.login);
        setLoading(false);
      } )
  })

  if (loading) {
    return <h2>Načítání stránky...</h2>
  }


  
  return (
    <section className="container">
      <h1>GithubUserFinder</h1>

      <h2>{login}</h2>
      <p>{name}</p>
    </section>
  );
};

export default GitHubFinder;
