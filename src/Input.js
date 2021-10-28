import React, { useState } from "react";
const Input = () => {
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name: name });
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await fetch(
        "https://practicing-from-codesandbox-default-rtdb.firebaseio.com/personNames.json",
        {
          method: "POST",
          body: body,
          headers: headers
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label htmlFor="name">Enter your Name : </label>
        <input
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Input;
