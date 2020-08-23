import React, { useState, createContext, useEffect }  from 'react';

export const LoginContext = createContext();

const LoginProvider = (props) => {

    const [usuario, setUsuario] = useState({});

    const [inputUsuario, setInputUsuario] = useState({
        username: '',
        password: ''
    })
    const {username, password} = inputUsuario;
    const [disponible, setDisponible] = useState(false);

    useEffect(() => {
        const detectarUsuario = async()=>{
            try {
                if(disponible){
                    let formdata = new URLSearchParams();
                    let headers = new Headers();

                    formdata.append('client_id', 'apitest');
                    formdata.append('client_secret','6645c999-570d-4fbe-8f31-f3112b1b5647');
                    formdata.append('grant_type','password');
                    formdata.append('username', `${username}`);
                    formdata.append('password', `${password}`);

                    //headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');

                    const url = await fetch('https://nr.yogestiono.cl/api/rc/auth',{
                        method: 'POST',
                        headers: headers,
                        body: formdata
                    })
                    const respData = await url.json();
                    setUsuario(respData);
                    console.log(respData);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        detectarUsuario();
    },[inputUsuario]) //el useEffect ejecuta la función cada vez que se cambie los datos ingresados, como dependencia llamo a inputUsuario que contiene un objeto
    
    return (
        <LoginContext.Provider value={{ usuario, setInputUsuario, setDisponible }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
