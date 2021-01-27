import './App.css';
import Homepage  from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignout from './components/signin-signout/signin-signout.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route  path="/shop" component={Shop} />
      <Route  path="/sign" component={SigninSignout} />


      </Switch>


    </div>
  );
}

export default App;
