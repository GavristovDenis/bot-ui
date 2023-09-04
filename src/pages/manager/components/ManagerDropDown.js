import React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function ManagerDropDown({ showNavbar, setShowNavbar, pageToShow, setPageToShow }) {
    return (
        <div className="drop_down">
            {pageToShow == null ?
                <div
                    className="logo"
                >
                    Лого
                </div> : <ArrowBackIosIcon className='back_icon' onClick={() => setPageToShow(null)} />}


        </div>
    )
}

export default ManagerDropDown