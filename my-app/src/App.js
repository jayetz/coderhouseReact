import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
            <NavBar />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es la app de Jorge Ayetz
        </p>
      </header>

    </div>
  );
}

export default App;
