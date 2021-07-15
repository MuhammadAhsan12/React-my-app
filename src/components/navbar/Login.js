import React from 'react'
import fire from '../../Fire';
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
// import SignUp from '../../components/Manu/SignUp';
// import SignUpUI from '../../components/Manu/SignUpUI';

const Login = () => {
    return (
        <div>
            <Link to='SignUp'>
                <Button>
                    Sign up
                </Button>
            </Link>
        </div>
    )
}

export default Login
