import React from 'react'
import Authentication from '../../components/Authentication/Authentication';
import SignupForm from '../../components/Authentication/SignupForm/SignupForm';
import registerPageImg from "../../assets/authentication-images/register-page.png";


const SignupPage: React.FC = () => {
  return (
   <Authentication reverse sideImg={registerPageImg}>
    <SignupForm/>
    </Authentication>
  )
}

export default SignupPage