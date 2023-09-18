import React from "react";

export default function Search() {
  return (
    <div className="form">
      <form>
        <input
          type="Search"
          placeholder="enter a city"
          className="text-input"
        />{" "}
        {""}
        <input type="Submit" value="Search" />
      </form>
    </div>
  );
}
