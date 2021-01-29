import './App.css';
import Homepage  from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignout from './components/signin-signout/signin-signout.component'
import {auth} from './components/firebase/firebase.utils'
import React from 'react'
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){

    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){

    
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route  path="/shop" component={Shop} />
        <Route  path="/sign" component={SigninSignout} />
  
  
        </Switch>
  
  
      </div>
    );
  }
}

export default App;
