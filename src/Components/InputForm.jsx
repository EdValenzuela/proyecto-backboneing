import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginProvider';
import ErrorInput from './ErrorInput';

const Form = () => {
    
    const { setInputUsuario, setDisponible, usuario } = useContext(LoginContext);
    
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    //Banderas de error de cada elemento ingresado
    const [error, setError] = useState({ 
        errorInputUser : false,
        errorInputPass : false
    });

    const handleInputChange = e =>{
        setInput({
            ...input,//Guardo el resultado anterior
            [e.target.name] : e.target.value //asocio el name al value
        }) 
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(input.username.trim() === ''){
            console.log('username vacio !');
            setError({
                errorInput: true
            })
            return;
        }
        if(!input.password){
            console.log('password vacio !');
            setError({
                errorSelect: true
            });
            return;
        }
        setError({
            errorInput: false,
            errorSelect: false
        });
        
        //le paso los datos y dejo disponible true para hacer la consulta
        setInputUsuario(input);
        setDisponible(true);
    }

    return (
        <>
        <div className="container mt-5">
        <form onSubmit={ handleSubmit } className="mb-5">
            <div className="form-group">
                <label htmlFor="username">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    name="username"
                    placeholder="Tu username"
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    placeholder="Tu password"
                    onChange={ handleInputChange }
                />
            </div>
            <button type="submit" className="btn btn-dark btn-block btn-lg">Entrar</button>
        </form>
            <div className="alert alert-primary" role="alert">
                <pre>{JSON.stringify(usuario, null, 2) }</pre>
            </div>
            { error.errorInput && (<ErrorInput mensaje="Ingrese un nombre !"/>)}
            { error.errorSelect &&  (<ErrorInput mensaje="Ingresa una contraseña !"/>)}
        </div>
        </>
    )
}

export default Form
