import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GitHubFinder from './pages/GitHubFinder';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
            <Helmet>
            <title>GithubUserFinder App</title>
            </Helmet>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="github-profiles" element={<GitHubFinder />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
