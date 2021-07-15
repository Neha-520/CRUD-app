import ListEmployee from './components/ListEmployee';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route,Router } from "react-router-dom";

function App() {
  return (
   <div>
   {/* <Router> */}
      <Header/>
    <div className="container">
      {/* <Switch> */}
        {/* <Route exact  path="/" component={ListEmployee}></Route>
        <Route exact  path="/employees" component={ListEmployee}></Route>
        <Route exact  path="/" component={ListEmployee}></Route> */}
        <ListEmployee/>
      {/* </Switch> */}
     </div>
      <Footer/>
      {/* </Router> */}
    </div>
  );
}

export default App;
