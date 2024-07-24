import { useEffect, useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const[profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async() => {
    try{
      const account = await client.profile();
      setProfile(account);
    }catch(err: any){
      navigate("/Kanbas/Account/Signin");
    }
  }
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };


  useEffect(() => {fetchProfile();}, []);
  return(
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input className="wd-usrename form-control mb-2" value={profile.username}
            onChange={(e) => setProfile({ ...profile, usename: e.target.value})}/>
          <input className="wd-password form-control mb-2" value={profile.password}
            onChange={(e) => setProfile({...profile, password: e.target.value})}/>
          <input className="wd-firstname form-control mb-2" value={profile.firstname}
          onChange={(e) => setProfile({...profile, firstname: e.target.value})}/>
          <input className="wd-lastname form-control mb-2" value={profile.lastname}
          onChange={(e) => setProfile({...profile, lastname: e.target.value})}/>
          <input className="wd-dob form-control mb-2" value={profile.dob}
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input className="wd-email form-control mb-2" value={profile.email}
          onChange={(e) => setProfile({...profile, email: e.target.value})}  />
          <br />
          <select className="wd-role form-control mb-2" onChange={(e) => setProfile({...profile, roel: e.target.value})}>
            <option value="USER">User</option>   <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>   <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}

    </div>
  )
}