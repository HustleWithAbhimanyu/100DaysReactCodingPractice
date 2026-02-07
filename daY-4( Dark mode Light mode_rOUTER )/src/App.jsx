
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import Navbar from "./Components/Navbar"
import './App.css'
import {ThemeProvider} from "./theme-context";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
