import "./GitHubFinder.css";
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
        setName(data.name);
        setLoading(false);
      } )
  })

  if (loading) {
    
    return <section className="container">
            <div className="container__app">
              <h2 className="loading_heading">Načítání stránky...</h2>
            </div>
          </section>
  }


  
  return (
    <section className="container">
      <div className="container__app">
        <h1>GithubUserFinder</h1>

        <h2>Login: {login}</h2>
        <h2>Jméno: {name}</h2>
      </div>
    </section>
  );
};

export default GitHubFinder;
