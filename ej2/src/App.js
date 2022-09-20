import './App.css';
import NavBar from './componentes/NavBar';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
