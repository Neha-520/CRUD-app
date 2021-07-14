import ListEmployee from './components/ListEmployee';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div>
   <Header/>
    <div className="container">
      <ListEmployee />
    </div>
    <Footer/>
    </div>
  );
}

export default App;
