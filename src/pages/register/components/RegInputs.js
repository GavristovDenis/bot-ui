import React from 'react'

function RegInputs({ setEmail, setFirstName, setLastName, setMiddleName, setPassword, isShowPassword, setShowPassword }) {
    return (
        <div
            className="reg_input_container"
            method="POST"
            autoComplete="off"
            action="users/id"
        >
            <input
                className="auth_input"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
            />

            <input
                className="auth_input"
                label="Имя"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Имя"
            />
            <input
                className="input_color"
                label="Фамилия"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Фамилия"
            />
            <input
                className="input_color"
                label="Отчество"
                variant="outlined"
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Отчество"
            />
            <input
                label="Пароль"
                variant="outlined"
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

export default RegInputs