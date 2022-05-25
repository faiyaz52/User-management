import React, { useState, useEffect } from "react";
import Headed from "../pages/header/header"
import UserTable from './userContactTable/userContactTable'
import axios from "axios";
import {useLocation} from 'react-router-dom';
const LandingPage = () => {
    const [user, setuserList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        loadUser()

    }, [])
    const loadUser = async () => {
        const getUser = await axios.get("https://randomuser.me/api/?results=100")
        if (getUser) {
            setuserList(getUser?.data?.results)
        }
    }
    return (
        <>
            <Headed userProfile={user} userList={location.state}/>
            <UserTable user={user} setuserList={setuserList} />
        </>
    )
}
export default LandingPage