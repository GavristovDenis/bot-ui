import React from 'react'
import { Link } from 'react-router-dom'
function HomeButtons() {
    return (
        <div className="buttons">
            <Link
                to={"/revenue"}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "var(--tg-theme-button-text-color)",
                }}
            >
                <button>Доход</button>
            </Link>
            <Link
                className='link'
                to={"/checkouts"}
                style={{
                    width: "100%",
                    display: "flex",
                    marginTop: "8px",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "var(--tg-theme-button-text-color)",
                }}
            >
                <button>
                    Запросить выплату
                </button>
            </Link>
        </div>
    )
}

export default HomeButtons