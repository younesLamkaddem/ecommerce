import './App.css';
import Homepage  from './pages/homepage/homepage.component';
import {Route , Switch , Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignout from './components/signin-signout/signin-signout.component'
import {auth , createUserProfileDocument} from './components/firebase/firebase.utils'
import React from 'react'
import { connect } from 'react-redux'
import {SetCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import Checkout from './pages/checkout/checkout.component'

class App extends React.Component {



  unsubscribeFromAuth = null ;

  componentDidMount(){

    const {SetCurrentUser} = this.props ;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user => {
      
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          SetCurrentUser({
            id : snapshot.id ,
            ...snapshot.data()
          })
        })
      }
      else {
       SetCurrentUser(user)
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){

    
    return (
      <div className="App">
        <Header  />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route  path="/shop" component={Shop} />
        <Route  exact path="/sign" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SigninSignout />)} />
        <Route  path="/checkout" component={Checkout} />

  
        </Switch>
  
  
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  SetCurrentUser : user => dispatch(SetCurrentUser(user))
})

export default connect(mapStateToProps ,mapDispatchToProps )(App);
