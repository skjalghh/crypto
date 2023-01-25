import React from "react";

export const Pagination = ({
  pageLimit,
  totalElements,
  changePage,
}: {
  pageLimit: number;
  totalElements: number;
  changePage: (params: number) => void;
}) => {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalElements / pageLimit); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="flex py-4 ">
        {pageNumber.map((page) => (
          <li key={page}>
            <button
              onClick={() => changePage(page)}
              className="border  py-2 px-4 font-bold hover:bg-blue-700"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
