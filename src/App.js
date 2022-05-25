import './App.css';
import LandingPage from './pages/landingPage';
import Login from './pages/login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/user" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
