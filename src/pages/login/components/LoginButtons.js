import React from 'react'
import { Link } from 'react-router-dom'
function LoginButtons({ loginRequest }) {
    const tg = window.Telegram.WebApp

    return (
        <div>      <button onClick={loginRequest} className="login_button">
            Войти
        </button>
            <div>
                <Link to="/register">{tg.MainButton.text("Войти").color(tg.ThemeParams.bg_color).textColor(tg.ThemeParams.button_text_colorString).onClick(() => loginRequest())}</Link>
            </div></div>
    )
}

export default LoginButtons