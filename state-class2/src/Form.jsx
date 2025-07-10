import { useState } from 'react';

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    passWord: '',
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    setFormData({
      fullName: '',
      userName: '',
      passWord: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Fullname">fullName</label>
      <input
        placeholder="enter full name!"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="Fullname"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        placeholder="enter User name!"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br />
      <br />
      <label htmlFor="password">PassWord</label>
      <input
        placeholder="enter Password!"
        type="password"
        value={formData.passWord}
        onChange={handleInputChange}
        id="password"
        name="passWord"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
