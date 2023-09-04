import React, { useState } from "react";
import ManagerDropDown from "./components/ManagerDropDown";
// import ManagerTable from "./components/ManagerTable";
// import FilterButtons from "./components/FilterButtons";
import dayjs from "dayjs";
const Manager = () => {
  const data = [
    {
      name: "Denis Gavristov",
      date: new Date("August 14, 2024 14:15:30"),
      amount: "1500 ₽",
      status: "Обработан",
    },
    {
      name: "Alex Gavristov",
      date: new Date("August 14, 2023 14:15:30"),
      amount: "1500 ₽",
      status: "Обработан",
    },
    {
      name: "Marty Gavristov",
      date: new Date("August 14, 2019 14:15:30"),
      amount: "1500 ₽",
      status: "В обработке",
    },
  ];

  const [mockData, setMockData] = useState(data);
  const [showNavbar, setShowNavbar] = useState(false);
  // const [statusDropDown, setStatusDropDown] = useState(false);
  // const [sortDropDown, setSortDropDown] = useState(false);
  const [pageToShow, setPageToShow] = useState(null);

  // const statusFilter = (status) => {
  //   const filteredArray = data.filter((item) => item.status === status);
  //   setMockData(filteredArray);
  // };

  // const dateSort = () => {
  //   const sortedData = [...mockData].sort((a, b) => {
  //     const dateA = new Date(a.date).getTime();
  //     const dateB = new Date(b.date).getTime();

  //     if (dateA < dateB) {
  //       return -1;
  //     }
  //     if (dateA > dateB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   setMockData(sortedData);
  // };

  const updateState = () => {
    const newState = data.map((obj) => {
      if (obj.id === data[pageToShow].id) {
        return { ...obj, status: "Обработан" };
      }
      return obj;
    });

    setMockData(newState);
  };

  if (pageToShow == null) {
    return (
      <div
        className="manager_container"
        // onClick={() => setSortDropDown(false) & setStatusDropDown(false)}
      >
        <ManagerDropDown
          showNavbar={showNavbar}
          setShowNavbar={() => setShowNavbar((prev) => !prev)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <ManagerDropDown
          showNavbar={showNavbar}
          setShowNavbar={() => setShowNavbar((prev) => !prev)}
          setPageToShow={setPageToShow}
          pageToShow={pageToShow}
        />
        <div>{mockData[pageToShow].name}</div>
        <div>{dayjs(mockData[pageToShow].date).format("DD/MM/YYYY")}</div>
        <div>{mockData[pageToShow].amount}</div>
        <div>{mockData[pageToShow].status}</div>
        {mockData[pageToShow].status === "В обработке" ? (
          <button onClick={() => updateState()}>Обработать</button>
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default Manager;
