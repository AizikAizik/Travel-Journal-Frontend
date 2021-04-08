import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  
  return (
    <Router>
      <>
        <Route path="/register" component={RegisterScreen}/>
        <Route path="/:id" component={MapScreen} />
        <Route path="/" component={HomeScreen} exact />
      </>
    </Router>
  );
}

export default App;
