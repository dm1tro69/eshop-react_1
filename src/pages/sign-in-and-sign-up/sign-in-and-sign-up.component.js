import React from "react";
import './sign-in-and-sign-up.style.scss'
import SigIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
    return(
       <div className={'sign-in-and-sign-up'}>
           <SigIn/>
           <SignUp/>
       </div>
    )
}
export default SignInAndSignUpPage