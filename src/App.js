import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Route/Home';
import { Contact } from './Route/Contact';
import Education from './Education/Education';
import Footer from './Footer/Footer';
import AboutMe from './Route/AboutMe';
// import { Route } from 'react-router';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from './Route/Portfolio';
import NotFound from './Route/NotFound';
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0F0826" }}>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/aboutme' element={<AboutMe />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/*' element={<NotFound />} />

        </Routes>
        <Footer></Footer>
      </Router>



    </div>
  );
}

export default App;
