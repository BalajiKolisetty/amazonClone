import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../Firebase"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth=> {
            history.push("/");
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            if(auth){
                history.push("/")
            }
        }).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='loginLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'></img>
            </Link>

            <div className='loginContainer'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="loginButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>Consectetur amet excepteur eiusmod enim ullamco fugiat aliquip. Ullamco enim incididunt sunt aute commodo pariatur anim laborum ullamco proident.</p>

                <button className='registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
