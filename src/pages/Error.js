import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <h2>404 </h2>
      <p>Tato stránka nenalezena</p>
      <button>
        {' '}
        <Link to="/">Zpět</Link>
      </button>
    </section>
  );
};

export default Error;
