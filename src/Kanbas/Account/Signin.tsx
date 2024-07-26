import { useNavigate } from "react-router";
import * as client from "./client";
import {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";


export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const signin = async() => {
    console.log("Signin function called");
    console.log('Signin button clicked');
    console.log('Username:', credentials.username);
    console.log('Password:', credentials.password); // 注意：在生产环境中不建议打印密码

    console.log("Credentials:", credentials); // 打印请求的凭证信息
    try{
      const currentUser = await client.signin(credentials);

      console.log("Current User:", currentUser); // 打印登录成功的用户信息
      
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    }catch (error: any) {
      console.error('Signin error:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        if (error.response.status === 401) {
          setError('Unauthorized: Invalid username or password');
        }
      } else {
        console.error('Error message:', error.message);
        setError('An error occurred. Please try again later.');
      }
    }
  };
  return(
    <div>
      <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} className="form-control mb-2" placeholder="username" />
      <input id="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />
      <button id="wd-signin-btn" onClick={signin} className="btn btn-primary w-100"> Sign in </button>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>



      
    </div>
  )
}