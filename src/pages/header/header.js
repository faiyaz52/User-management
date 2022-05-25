import React from 'react'
import "../../style/user.scss"
import { useNavigate } from "react-router-dom";
const Header = ({ userProfile, userList }) => {
    let navigate = useNavigate();
    const profile = userProfile && userProfile[0]
    return (
        <>
            <div className='navigation-bar'>
                <div className='profile-details'>
                    <div>
                        <img src={profile?.picture?.medium} alt={profile?.picture?.thumbnail} className="user-image" />
                    </div>
                    <div className='profile-text'>
                        <div>
                            <h5>{userList?.userName}</h5>
                        </div>
                        <div>
                            <h6>{userList?.email}</h6>
                        </div>
                    </div>
                </div>
                <div style={{ cursor: "pointer" }} onClick={() => navigate(`/`)}>
                    <span className="glyphicon glyphicon-log-out" style={{ marginRight: "25px", color: "#fff" }}></span>
                </div>
            </div>
        </>
    )
}
export default Header