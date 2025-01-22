import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  const { checked: propChecked, onChange } = props;
  const [checked, setChecked] = useState(!!propChecked);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <div className="round">
      <input
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;



