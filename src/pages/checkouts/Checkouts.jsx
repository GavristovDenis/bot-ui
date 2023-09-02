import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export const Checkouts = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="checkouts_wrapper">
      <div className="checkouts_nav_container">
        <div className="drop_down">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", marginLeft: "5%" }}
          >
            Лого
          </div>
          <div className="drop_down_title">
            <span
              style={{
                marginTop: "1%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Запросы на выплату
            </span>
          </div>
          <div
            className="drop_down_button"
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            {showNavbar ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>

        <div className="checkouts_buttons">
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
            <button>Доходность</button>
          </Link>
        </div>
      </div>
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
              <tr>
                <td>27/9/2023</td>
                <td>1800 ₽</td>
                <td>В обработке</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
