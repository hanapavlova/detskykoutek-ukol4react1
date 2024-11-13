import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
      <main>
        <h2>404: Error</h2>
        <p>Nic tu nenajdete...</p>
        <Link to='/'>Domů</Link>
      </main>
    );
  };