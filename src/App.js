import ListEmployee from './components/ListEmployee';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route,BrowserRouter as Router} from "react-router-dom";
import CreateEmployee  from './components/CreateEmployee';

function App() {
  return (
   <div>
<Router> 
      <Header/>
    <div className="container">
   <Switch> 
        <Route exact  path="/" component={ListEmployee}></Route>
        <Route  path="/employees" component={ListEmployee}></Route>
        <Route  path="/add-employee/:id" component={CreateEmployee}></Route>
        {/* <Route  path="/update-employee/:id" component={UpdateEmployee }></Route> */}
   </Switch> 
     </div>
   </Router> 
   <Footer/>
    </div>
  );
}

export default App;
