import React, { useState } from "react";
import "./BookaTable.css";

function BookaTable() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    date: "",
    time: "",
    reservationType: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className='app__bookTable  flex__center  section__padding'
      id='booktable'
    >
      <h1 className='headtext__cormorant'>Book your table</h1>
      <form onSubmit={handleSubmit}>
        <div className='input__item'>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            required
          />
        </div>
        <div className='input__item'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            required
          />
          <input
            type='phone'
            name='phoneNo'
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder='Availabe Phone No.'
          />
        </div>
        <div className='input__item'>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            placeholder=''
            required
          />
          <input
            type='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            placeholder='hrs:mins'
            required
          />
        </div>

        <div className='reservation__type'>
          <label htmlFor='reservationType'>Reservation Type</label>

          <select
            id='reason'
            name='reservationType'
            value={formData.reservationType}
            onChange={handleChange}
            required
          >
            <option value='null'>Please Select</option>
            <option value='dinner'>Dinner</option>
            <option value='vip'>VIP/Mezzanine</option>
            <option value='birthday'>Birthday/Anniversary</option>
            <option value='private'>Private</option>
            <option value='corporate'>Corporate</option>
            <option value='wedding'>Wedding</option>
            <option value='holiday'>Holiday</option>
          </select>
        </div>

        <div className='special__note'>
          <label htmlFor='request'>Any special request</label>
          <textarea
            name='request'
            value={formData.request}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className='custom__button'>
          Send Us
        </button>
      </form>
    </div>
  );
}

export default BookaTable;
