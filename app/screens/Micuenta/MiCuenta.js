import React, { useState, useEffect } from 'react'
import * as firebase from "firebase";

import UserInvitado from './userinvitado';
import Userlogeado from './userlogeado';
import Loading from '../../components/Loading';



export default function MiCuenta() {
    const [login,setLogin] = useState(null);

    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
        });
    }, [])

    if (login == null) return <Loading isVisible={true} text="Cargando .."/>



    return login ? <Userlogeado/> : <UserInvitado/>;
}