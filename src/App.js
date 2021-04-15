import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterScreen}/>
        <Route path="/:id" component={MapScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
}

export default App;
