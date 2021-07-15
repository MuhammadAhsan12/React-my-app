import React, { useState, useEffect } from 'react';
import fire from '../../Fire';
import './SignUp.css';
import SignUpUI from './SignUpUI';

const SignUp = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInput = () => {
        setEmail("");
        setPassword("");
    }

    const clearInputError = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearInputError();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.massage);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleSignUp = () => {
        clearInputError();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-exists":
                    case "auth/invalid-email":
                        setEmailError(err.massage);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleLogOut = () => {
        fire.auth().signOut();
    }

    const authListner = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInput();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListner();
    }, []);

    return (
        <div>
            {user ?
                <div>
                    <section className="login">
                        <div className="loginContainer">
                            <label style={{textAlign : 'center',}}> user : "{user.email}" </label>
                            <button className="logout" onClick={() => { handleLogOut() }}>Log out</button>
                        </div>
                    </section>
                </div>
                :
                <SignUpUI
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            }

        </div>
    )
}

export default SignUp
