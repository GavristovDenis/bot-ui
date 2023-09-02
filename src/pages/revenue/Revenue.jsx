import React, { useState } from "react";
import Modal from "./components/Modal";
import RevDropDown from "./components/RevDropDown";
import CurrentTable from "./components/CurrentTable";
import AllTimeTable from "./components/AllTimeTable";
export const Revenue = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="revenue_wrapper">
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
      <RevDropDown showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <div className="revenue_container">
        <CurrentTable />
        <AllTimeTable />
      </div>
      <div className="check_out_button_container">
        <button
          className="check_out_button"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Вывести в рублях
        </button>
      </div>
    </div>
  );
};
