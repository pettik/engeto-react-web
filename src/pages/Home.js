import './Home.css';
import { useState } from 'react';

const Home = () => {
  const [clicks, setClicks] = useState(0);

  function handleEvent(e) {
    e.preventDefault();
    setClicks((clicks) => clicks + 1);
  }
  return (
    <section className="container">
      <h1>Úvodní strana</h1>
      <button onClick={handleEvent}>Klikni: {clicks}</button>
    </section>
  );
};
export default Home;
