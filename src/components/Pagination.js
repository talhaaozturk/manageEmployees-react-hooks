import React, { useEffect, useState } from "react";

const Pagination = ({
  pages,
  setCurrentPage,
  totalEmployee,
  currentEmployee,
}) => {
  //const pages = 5;
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);
  return (
    <nav aria-label="...">
      <div className="hint-text">
        Showing <b>{currentEmployee.length}</b> out of <b>{totalEmployee}</b>{" "}
        employees.
      </div>
      <ul className="pagination" style={{ float: "right", marginTop: "25px" }}>
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
          onClick={
            () => setCurrentButton((prev) => (prev === 1 ? prev : prev - 1)) //bir öncekine geçme metodu
          }
        >
          <a className="page-link" href="#" tabindex="-1">
            Previous
          </a>
        </li>
        {numOfPages.map((page) => {
          return (
            <li
              className={`${
                currentButton === page ? "page-item active" : "page-item "
              }`}
              onClick={() => setCurrentButton(page)}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numOfPages.length ? prev : prev + 1
            )
          }
        >
          <a className="page-link" href="#" tabindex="-1">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
