import React from 'react'
import "./Contact.css"
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bc00e68c-3cf7-4154-89ce-3597e33445cc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div id='contact' className='contact--container'>
      <h1>Contact </h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Enter Your Name' name='name' required/>
        <input type="email" placeholder='Enter Your Email'name='email' required/>
        <textarea placeholder='Enter Your Message' name='message' required/>
        <button type="submit" className='button'>Submit</button>
      </form>
    </div>
  )
}

export default Contact