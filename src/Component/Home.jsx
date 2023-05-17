import './style.css';
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import edit from "../Logo/edit.png";
import delet from "../Logo/delete.png";
import Delete from "./Delete.jsx";
import Update from "./Update.jsx";
import Create from "./Create.jsx";

function Home() {
  const [obj, setObj] = useState([]);
  let [del, setDel] = useState(false);
  let [itemEdit, setItemEdit] = useState(false);
  let [id, setID] = useState();
  let [itemData, setItemData] = useState({});
  let [createItem, setCreateItem] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {}, [itemData]);

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3001/users?_limit=${itemsPerPage}&_page=${currentPage + 1}`
    );
    const data = await response.json();

    setObj(data);
    setPageCount(
      Math.ceil(response.headers.get("X-Total-Count") / itemsPerPage)
    );
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  function createUsers() {
    if (createItem === false) {
      setCreateItem(true);
    } else {
      setCreateItem(false);
    }
  }

  function handleEdit(items) {
    setItemEdit(true);
    setItemData(items);
  }
  function delCall(event, index) {
    setDel(true);
    setID(index);
  }
  return (
    <div className="w-screen h-screen bg-slate-800 text-slate-50">
      {del ? <Delete item={{ id: id }} /> : null}
      {itemEdit ? <Update items={itemData} /> : null}
      {createItem ? <Create /> : null}
      <div className="w-screen h-14 flex fixed items-center justify-between p-2 bg-slate-600 font-bold text-lg">
        <h4>CRUD APP Navigation</h4>
      </div>
      <div className="w-full pt-20 p-2 bg-slate-200 flex items-center">
        <button
          className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-slate-50 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          onClick={(event) => createUsers(event)}
        >
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            + Add Items
          </span>
        </button>
      </div>
      {obj ? (
        <div className="w-screen h-full items-center p-2 bg-slate-800 ">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CITY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PHONE NO#
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y bg-gray-50 text-slate-900 divide-gray-200">
              {obj.map((it) => (
                <tr>
                  <td className="px-6 text-left py-4 whitespace-nowrap">
                    {it.id}
                  </td>
                  <td className="px-6 text-left py-4 whitespace-nowrap">
                    {it.name}
                  </td>
                  <td className="px-6 text-left py-4 whitespace-nowrap">
                    {it.city}
                  </td>
                  <td className="px-6 text-left py-4 whitespace-nowrap">
                    {it.phoneNo}
                  </td>
                  <td className="px-6 text-left flex justify-around py-4 whitespace-nowrap">
                    <button onClick={(event) => handleEdit(it)}>
                      <img className="w-7 h-7" src={edit} alt="" />
                    </button>
                    <button onClick={(event) => delCall(event, it.id)}>
                      <img className="w-7 h-7" src={delet} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate className='flex justify-center mt-20 items-center bg-transparent text-slate-50'
            previousLabel={"<"}
            nextLabel={">"}
            breakClassName={'item break-me '}
            breakLabel="..."
            pageCount={pageCount}
            pageClassName={'item pagination-page '}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName={"item active"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Home;
