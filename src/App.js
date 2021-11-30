import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Route/Home';
import { Contact } from './Route/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0F0826" }}>
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
    </div>
  );
}

export default App;
