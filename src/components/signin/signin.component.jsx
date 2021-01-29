import React , { Component} from 'react';
import './signin.style.scss';
import Forminput from '../form-input/form-input.component'
import CustomInput from '../customButton/customButton.component';
import { auth ,signInWithGoogle} from '../firebase/firebase.utils'
class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    formSubmit = async e => {
        e.preventDefault();

        const {email , password} = this.state ; 

        try {
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({
                email : '',
                password : ''
            })
        }catch(err){
            console.log(err)
        }

        this.setState({email : "", password : ""})
    }

    handleChangeEmail = ({target})=>{
        this.setState({email : target.value})
    }

    handleChangePassword = ({target}) => {
        this.setState({password : target.value})
    }

    render(){
         
        return (
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign in with your email and Password</span>
            <form onSubmit={this.formSubmit}>
                <Forminput type="email" value={this.state.email} HandleChange={this.handleChangeEmail} label="email" required />
                <Forminput type="password" value={this.state.password} HandleChange={this.handleChangePassword} label="password" required />
                <div className="buttons">
                <CustomInput type="submit">Sign In</CustomInput>
                <CustomInput onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomInput>
                </div>


            </form>
            </div>
        )
    }
}

export default Signin