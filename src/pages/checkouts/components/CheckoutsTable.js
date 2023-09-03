import React from 'react'

function CheckoutsTable() {
    return (
        <div className="revenue_container">
            <div style={{ width: "100%", height: "50%" }}>
                <table border="2" className="checkouts_table">
                    <tbody>
                        <tr>
                            <td>Дата создания запроса</td>
                            <td>Сумма вывода</td>
                            <td>Статус запроса</td>
                        </tr>
                        <tr>
                            <td>28/9/2023</td>
                            <td>1800 ₽</td>
                            <td>Обработан</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CheckoutsTable