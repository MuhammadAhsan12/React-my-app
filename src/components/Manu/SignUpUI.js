import React from 'react';
import './SignUp.css';

const SignUpUI = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>User Name</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        hasAccount ? (
                            <>
                                <h1 className = "btnlog" onClick={handleLogin}>Sign in</h1>
                                <p>dont have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 className = "btnlog" onClick={handleSignUp}>Sign Up</h1>
                                <p>have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        )}
                </div>
            </div>
        </section>
    )
}

export default SignUpUI;