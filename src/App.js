import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/comedy" element={<Comedy />} />
        <Route path="/serials" element={<Serials />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="all-movies/:movieId" element={<OneMovie />} />
        <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
