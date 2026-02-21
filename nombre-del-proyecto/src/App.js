import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registro" component={Registro} />
      </Switch>
    </Router>
  );
}



export default App;
