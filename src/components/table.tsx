import type { CryptoData, CryptoDataResponse } from "../utils/types";

export const Table = ({
  data,
  pageLimit,
  currentPage,
}: {
  data: CryptoDataResponse;
  pageLimit: number;
  currentPage: number;
}) => {
  const allHeaders = Object.keys(data.Data.Data[0] as CryptoData);
  const headers = allHeaders.filter(
    (h) => !["conversionSymbol", "conversionType"].includes(h)
  );
  console.log("headers", headers);

  const indexLastElement = currentPage * pageLimit;
  const indexFirstElement = indexLastElement - pageLimit;
  const currentElements = data.Data.Data.slice(
    indexFirstElement,
    indexLastElement
  );

  console.log(currentElements);

  return (
    <table className="border-read table-auto">
      <thead className="border">
        <tr>
          {headers.map((h) => (
            <th key={h} className="border">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* pagination here */}

        {currentElements.map((dataObject) => (
          <tr
            className="border  odd:bg-gray-100 even:bg-gray-300 hover:bg-gray-400"
            key={dataObject.time}
          >
            {headers.map((header, index) => {
              return (
                <td className="border" key={index}>
                  {header === "time"
                    ? new Date(dataObject.time * 1000).toDateString()
                    : dataObject[header as keyof CryptoData]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
