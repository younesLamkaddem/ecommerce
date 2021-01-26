import './App.css';
import Homepage  from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom';


const Hats = (props) =>  {
  console.log(props)
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/hats" component={Hats} />
      </Switch>


    </div>
  );
}

export default App;
