import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables" className="container text-center mt-3">
      <div className="row justify-content-center">
        <div className="col-6 col-md-4 text-center">
          <h2 className="fw-bold float-start">Array State Variable</h2>
          <button onClick={addElement} className="btn btn-success m-2 float-start">
            Add Element
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <ul className="list-group">
              {array.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{item}</span>
                  <button onClick={() => deleteElement(index)}
                          id="wd-delete-element-click"
                          className="btn btn-danger mx-5">
                    Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}
