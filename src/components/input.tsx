import React from "react";
import { Icon } from ".";

const Input = () => {
  return (
    <div>
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 end-3 flex items-center pointer-events-none">
          <Icon.SearchIcon color="black" />
        </div>
      </div>
    </div>
  );
};

export default Input;