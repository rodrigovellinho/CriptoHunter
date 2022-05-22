import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';
import Alert from './components/Authentication/Alert';

const useStyles = makeStyles({
  App: {
    backgroundColor: '#14161A',
    color: 'white',
    minHeight: '100vH',
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/coins/:id">
            <CoinPage />
          </Route>
        </Switch>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
