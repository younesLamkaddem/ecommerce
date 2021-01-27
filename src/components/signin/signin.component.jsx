import React , { Component} from 'react';
import './signin.style.scss';
import Forminput from '../form-input/form-input.component'
import CustomInput from '../customButton/customButton.component';
class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    formSubmit = e => {
        e.preventDefault();

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
                <CustomInput type="submit">Sign In</CustomInput>
            </form>
            </div>
        )
    }
}

export default Signin