import { useState } from "react";
// import MyButton from "./MyButton";
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState({ EmployeeId: "" });
  const id = ["001", "002", "003", "004", "005"];
  const deparment = ["frondend", "backend", "QA", "degitalmarketing", "sales"];
  const Category = ["Hadware", "Software", "Mouse", "keyborad", "headset"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // setSelectedOption(selectedOption);
  };

  const handleClick = (e) => {
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
                <option value=""></option>
                {id.map((id, index) => (
                  <option key={index} value={id}>
                    {id}
                  </option>
                ))}
              </select>
            </div>
            <div className="department">
              <label>Department </label>
              <select className="dropdown">
                <option value=""></option>
                {deparment.map((deparment, index) => (
                  <option key={index} value={deparment}>
                    {deparment}
                  </option>
                ))}
              </select>
            </div>
            <div className="category">
              <label>Category </label>
              <select className="dropdown">
                <option value=""></option>
                {Category.map((Category, index) => (
                  <option key={index} value={Category}>
                    {Category}
                  </option>
                ))}
              </select>
            </div>
            <div className="discription">
              <label>Discription</label>
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
