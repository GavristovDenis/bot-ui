import React from 'react'
import { Link } from 'react-router-dom'
function LoginButtons({ loginRequest }) {
    return (
        <div>      <button onClick={loginRequest} className="login_button">
            Войти
        </button>
            <div>
                <Link to="/register">Регистрация</Link>
            </div></div>
    )
}

export default LoginButtons