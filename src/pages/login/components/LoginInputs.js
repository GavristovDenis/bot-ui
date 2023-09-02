import React from 'react'

function LoginInputs({ setEmail, setPassword, isShowPassword, setShowPassword }) {
    return (

        <div className="input_container">
            <input
                className="auth_input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                className="auth_color"
                label="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                type={isShowPassword}
            />

            <div>
                <span>Показать пароль </span>
                <input
                    type="checkbox"
                    onChange={() => setShowPassword((prev) => !prev)}
                />
            </div>
        </div>
    )
}

export default LoginInputs