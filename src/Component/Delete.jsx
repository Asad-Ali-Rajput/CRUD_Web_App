import React, { useState } from "react";

function Delete({ item }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
          fetch(`http://localhost:3001/users/${item.id}`, {
            method: 'DELETE'
          })
            .then(response => response.json())
            .then(() => {
              console.log('Item deleted successfully');
            })
            .catch(error => console.error('Error deleting item:', error));
        setIsVisible(false);
      };

  return (
    <div className={`z-50 w-screen h-screen flex justify-center items-center bg-transparent text-slate-800 ${isVisible ? "block" : "hidden"}`}>
      <div className="w-2/6 h-1/6 p-4 rounded-lg bg-slate-200">
        <h1 className="py-4">Are you sure you want to delete this item?</h1>
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={event => handleDelete(event)}>YES</button>
        <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-slate-50 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={event => setIsVisible(false)}>
            <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              NO
            </span>
          </button>
      </div>
    </div>
  );
}

export default Delete;
