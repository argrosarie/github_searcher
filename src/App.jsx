import React from "react";
import Searcher from "./components/Searcher";
import { Container } from '@mui/material';
import { useState } from "react";
import { useEffect } from "react";
import { getGithubUser } from './services/users';
import UserCard from "./containers/UserCard";


const App = () => {

    const [inputUser, setInputUser] = useState('argrosarie');
    const [userState, setUserState] = useState('inputUser');
    const [notFound, setNotFound] = useState(false);
    
    
    const gettingUser = async (user) => {
        const userResponse = await getGithubUser(user);
        if(userState === 'argrosarie') {
            localStorage.setItem('argrosarie', userResponse)
        }

        if(userResponse.message === 'Not found'){
            const { argrosarie } = localStorage;
            setInputUser(argrosarie);
            setNotFound(true);
        } else {
            setUserState(userResponse)
        }

    };
    console.log(userState, 'this is userState')
    
    useEffect(()=> {
        gettingUser(inputUser)
    },[inputUser])

    return(
        <Container sx={{
            backgroundColor: "#47667b",
            width: '80vw',
            height: '500px',
            borderRadius: '16px',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState}/>
        </Container>
    )
}

export default App