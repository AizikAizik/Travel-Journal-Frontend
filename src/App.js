import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';


function App() {
  console.log(process.env.REACT_APP_TEST)
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
    </Router>
  );
}

export default App;
