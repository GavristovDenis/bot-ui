import React from 'react'
import { Link } from 'react-router-dom'
function LoginButtons({ loginRequest }) {


    return (
        <div className='login_buttons_container'>
            <div>
                <Link to="/register">Регистрация</Link>
            </div>
            <button onClick={loginRequest} className="login_button">
                Войти
            </button>
        </div>
    )
}

export default LoginButtons