import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main1 from './componentes/Main1';
import Main2 from './componentes/Main2';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/main1" element={<Main1/>}></Route>
          <Route exact path="/main2" element={<Main2/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
