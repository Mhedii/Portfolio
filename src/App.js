import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Route/Home';
import { Contact } from './Route/Contact';
import Education from './Education/Education';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0F0826" }}>
      <Header></Header>
      <Home></Home>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
