import { useState } from "react";
const Dropdown = () => {
  const [setSelectedOption] = useState({ EmployeeId: "" });
  const idData = ["001", "002", "003", "004", "005"];
  const deparment = ["frondend", "backend", "QA", "degitalmarketing", "sales"];
  const categoryData = ["Hadware", "Software", "Mouse", "keyborad", "headset"];

  const handleClick = () => {
    alert("success");
    setSelectedOption(" ");
  };

  return (
    <>
      <div className="container">
        <div className="profile-color">
          <h1>Register</h1>
          <div className="sub-container">
            <div className="employee-id">
              <label>Employee ID </label>
              <select className="dropdown">
                <option></option>
                {idData.map((id, index) => (
                  <option key={index} value={id}>
                    {id}
                  </option>
                ))}
              </select>
            </div>
            <div className="department">
              <label>Department </label>
              <select className="dropdown">
                <option></option>
                {deparment.map((designation, index) => (
                  <option key={index} value={designation}>
                    {designation}
                  </option>
                ))}
              </select>
            </div>
            <div className="category">
              <label>Category </label>
              <select className="dropdown">
                <option></option>
                {categoryData.map((Category, index) => (
                  <option key={index} value={Category}>
                    {Category}
                  </option>
                ))}
              </select>
            </div>
            <div className="description">
              <label>Description</label>
              <textarea className="text-box"></textarea>
            </div>
            <div className="buttons">
              <div className="cancel-button">
                <button className="cancel-b" onClick={handleClick}>
                  Cancel
                </button>
              </div>
              <div className="submit-button">
                <button className="submit-b" onClick={handleClick}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
