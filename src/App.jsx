import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {

  return (
    <div className='app-wrapper'>
      <Header color="light" light={true} expand="md" container="md" />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
