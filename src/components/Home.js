import React from 'react';
import { useHistory } from "react-router";
import ProfilesData from './ProfilesData';

const Home = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
      };

    return (
        <div>
            <h2>Welcome Dude</h2>
            <button className="btn btn-primary" onClick={handleLogout}>
                Logout
            </button>
            <ProfilesData/>          
        </div>
    );
}

export default Home;