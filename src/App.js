import ListEmployee from './components/ListEmployee';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route,BrowserRouter as Router} from "react-router-dom";
import CreateEmployee  from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
   <div>
<Router> 
      <Header/>
    <div className="container">
   <Switch> 
        <Route exact  path="/" component={ListEmployee}></Route>
        <Route  path="/employees" component={ListEmployee}></Route>
        <Route exact path="/add-employee" component={CreateEmployee}></Route>
        <Route  path="/update-employee/:id" component={UpdateEmployee}></Route>
        <CreateEmployee/>
   </Switch> 
     </div>
      <Footer/>
   </Router> 
    </div>
  );
}

export default App;
