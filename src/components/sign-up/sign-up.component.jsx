import React from 'react'; 
import './sign-up.style.scss';
import {auth , createUserProfileDocument} from '../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../customButton/customButton.component'
class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    };

    handeSubmit = async e => {
        e.preventDefault();
        const {displayName ,email , password ,confirmPassword } = this.state;


        if(password !== confirmPassword){
            return;
        }

        try {
            const user = await auth.createUserWithEmailAndPassword(email , password);

            await createUserProfileDocument(user , {displayName}) ; 
     
            this.setState({
             displayName : '',
             email : '',
             password : '',
             confirmPassword : ''
            })
     
        }catch(err){
            console.error(err)
        }


    }

    handleChange = (e) => {
        const {name , value} = e.target ;
        this.setState({ [name] : value})
    }
    render(){
        
        const {displayName ,email , password ,confirmPassword } = this.state;
        return (

            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Create account with email</span>
                <form className="sign-up-form" onSubmit={this.handeSubmit}> 
                <FormInput 
                    type="text"
                    name="displayName"
                    onChange={this.handleChange}
                    value={displayName}
                    label="Enter your name"

                />
                               <FormInput 
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    label="Enter Email"

                    
                />
                               <FormInput 
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                    label="Enter Password"

                />
                               <FormInput 
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleChange}
                    value={confirmPassword}
                    label="Confirm Password"
                />
                <CustomButton type="submit">Sign Up</CustomButton>
                
                </form>
            </div>
        )
    }
}

export default SignUp