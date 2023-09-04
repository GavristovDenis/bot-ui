import React from 'react'

function FilterButtons({ setStatusDropDown, setMockData, statusFilter, data, dateSort, statusDropDown, sortDropDown, setSortDropDown }) {
    return (
        <div className="filter_buttons_container">
            <div className="filter_buttons">
                <div className='button_selector'>
                    <div className='selector_button_container'>   <button onClick={() => setStatusDropDown(statusDropDown ? false : true)}>
                        Фильтровать по статусу
                    </button></div>
                    {statusDropDown ? <div className='hidden_buttons'>
                        <button onClick={() => setMockData(data)}>-</button>
                        <button onClick={() => statusFilter("В обработке")}>
                            В обработке
                        </button>
                        <button onClick={() => statusFilter("Обработан")}>
                            {" "}
                            Обработан
                        </button>
                    </div> : " "}

                </div>

                <div className='button_selector'>
                    <div className='selector_button_container'> <button onClick={() => setSortDropDown(sortDropDown ? false : true)}>Сортировать по</button></div>
                    {sortDropDown ? <div className='hidden_buttons'>
                        <button onClick={() => dateSort()}>Дате</button>
                        <button onClick={() => setMockData(data)}>-</button>
                    </div> : " "}

                </div>
            </div>
        </div>
    )
}

export default FilterButtons