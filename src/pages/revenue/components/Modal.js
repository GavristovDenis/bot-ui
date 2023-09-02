import React from 'react'

function Modal({ setShowModal }) {
    return (
        <div className="modal" onClick={() => setShowModal((prev) => !prev)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <div className="modal_close">
                    <div onClick={() => setShowModal((prev) => !prev)}>
                    </div>
                </div>
                <span>Введите сумму вывода:</span>
                <input className="modal_input" placeholder="Введите сумму" />
                <span>Доступно к выводу: 321</span>
                <button className="modal_button_active">Запросить выплату</button>
            </div>
        </div>
    )
}

export default Modal