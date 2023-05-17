// import './App.css';
import React, { useState } from "react";

function Create() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { name: name, city: city, phoneNo: phoneNo };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item added successfully:", data);
        // Perform any additional actions, such as updating the item list
      })
      .catch((error) => console.error("Error adding item:", error));

    setName("");
    setCity("");
    setPhoneNo("");
    setIsVisible(false);
  };
  function closeDiv(event) {
    setIsVisible(false);
  }
  return (
    <div
      className={`w-screen h-screen bg-slate-800 text-slate-50 ${
        isVisible ? "Block" : "hidden"
      }`}
    >
      <div className="w-screen h-14 flex fixed items-center justify-between p-2 bg-slate-600 font-bold text-lg">
        <h4>CRUD APP Navigation</h4>
        <div className="w-2/6 flex justify-around items-center">
        </div>
      </div>
      <div className="w-screen h-full flex justify-center pt-20 items-center p-2 bg-slate-100 ">
        <div className="w-1/3 h-3/4 p-4 flex justify-center items-center border border-slate-300 rounded-md">
          <div className="w-full h-3/4">
            <h1 className="text-slate-800 font-bold text-[36px] my-4 mb-10">
              Add Item
            </h1>
            <form action="">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
                  placeholder=" "
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
                  placeholder=" "
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
                  placeholder=" "
                  onChange={(event) => setPhoneNo(event.target.value)}
                  required
                />
                <label
                  for="floating_repeat_password"
                  className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Number
                </label>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="w-1/2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-slate-50 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  onClick={(event) => handleSubmit(event)}
                >
                  <span className="w-full relative px-5 py-2 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    SAVE
                  </span>
                </button>
                <button className="w-1/2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-slate-50 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={event => closeDiv(event)}>
                  <span className="w-full relative px-5 py-2 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Cancel
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
