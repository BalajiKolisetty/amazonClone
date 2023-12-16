import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import CheckoutPage from './components/CheckoutPage';


function App() {
  return (
    <div className='app'>
      <Router>

        <Switch>
        <Route path="/checkout">
            <CheckoutPage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
