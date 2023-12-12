import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserEmail, handleUserName } from '../../store/slices/user.slice';
const User = () => {
    const userName = useSelector((state) => state.userData.userData.name);
    const userEmail = useSelector((state) => state.userData.userData.email);
    const dispatch = useDispatch();
    const [userNameInput, setUserNameInput] = useState("name");
    const [userEmailInput,setUserEmailInput]=useState("name@gmail.com")
    return (
        <section>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <div>
                <button onClick={() => { dispatch(handleUserName(userNameInput)) }}>name</button>
                <button onClick={() => { dispatch(handleUserEmail(userEmailInput)) }}>email</button>
            </div>
            <div>
                <input type="text" id='name' value={userNameInput} onChange={(e)=>{setUserNameInput(e.target.value)}} />
                <input type="email" id='email' value={userEmailInput} onChange={(e)=>{setUserEmailInput(e.target.value)}}/>
            </div>
        </section>
    );
}

export default User;
