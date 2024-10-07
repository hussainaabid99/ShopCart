//CSS imports 
import './Auth.css';


import Auth from "../../components/Auth/Auth";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../../apis/fakeStoreProdApis';


function Signup() {

     const navigate = useNavigate();

     async function onAuthFormSubmit(authArgs, resetForm) {
          try {
               await axios.post(signup(), {
                    username: authArgs.username,
                    email: authArgs.email,
                    password: authArgs.password
               });
               navigate('/signin');
          } catch (error) {
               console.log(error);
               resetForm();
          }
     }

     return (
          <div className="container">
               <div className="row">
                    <h2 className="home-title text-center">
                         Welcome to Shop Cart
                    </h2>
               </div>
               <div className="login-wrapper" id="loginForm">
                    <h4 className="text-center">Signup</h4>
                    <Auth
                         onSubmit={onAuthFormSubmit}
                    />
                    <div className="signup-btn text-center" id="showSignUpBtn">
                         <Link to="/signin">
                              Already have an Account? Signin Here
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Signup;