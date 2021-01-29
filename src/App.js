import './App.css';
import Homepage  from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignout from './components/signin-signout/signin-signout.component'
import {auth , createUserProfileDocument} from './components/firebase/firebase.utils'
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

    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user => {
      
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : snapshot.id , 
                ...snapshot.data()
          })
        })
      }
      else {
        this.setState({currentUser : user})
      }

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
