//CSS import
import './App.css'

//Custom Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainRoutes from './routes/MainRoutes';

function App() {

  return (
    <div className='app-wrapper'>
      <Header
        color="light"
        light={true}
        expand="md"
        container="md"
      />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App;
