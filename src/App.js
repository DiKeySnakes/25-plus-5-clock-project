import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/Footer.js';
import './styles/Footer.css';
import Clock from './components/Clock.js';
import './styles/Clock.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
