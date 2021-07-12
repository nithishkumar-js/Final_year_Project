import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
export default function Login() {
    const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
    return (
        <div className="fb_login_layout">
                {/* Facebook clone Header text */}
            <div className="fb_Login_header">
             <h1 className="fb_Login_header_text">facebook clone</h1>
            </div>
            
            {/* Sign with Google button */}
             <div className="fb_btn" onClick={signIn}>
                 <FcGoogle size={24} className='icons'/>
                 <div className="fb_signin_btn">Sign with Google</div>
             </div>
        </div>
    )
}
