import React, { useState } from "react";
import "./style.css";

function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({ firstName: "", lastName: "", password: ""});

  const handleInputChange = function(event) {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;

    console.log("Input has changed: ", name, value);

    if (name === "firstName") {
      setFormData({ firstName: value, lastName: formData.lastName, password: formData.password});
    } else if (name === "lastName") {  // name is "lastName"
      setFormData({ firstName: formData.firstName, lastName: value, password: formData.password});
    } else {
      setFormData({ firstName: formData.firstName, lastName: formData.lastName, password: value});
    }
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      alert(`Please fill out your first and last name!`);
    } else if (formData.password.length < 6) {
      alert(`Please choose a more secure password, ${formData.firstName} ${formData.lastName}`);
    } else {
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${formData.firstName} ${formData.lastName}`);
      setFormData({
        firstName: "",
        lastName: "",
        password: ""
      });
    }
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hello {formData.firstName} {formData.lastName}
      </p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password ******"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
