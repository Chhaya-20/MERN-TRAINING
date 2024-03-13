import React, { useState } from 'react';
import './Search.css'

const userData = [
    { id: 1, name: 'Chaya', email: 'chaya@gmail.com', contactNo: '1234567890', age: 21 },
    { id: 2, name: 'Vanshika', email: 'Vanshi@gmail.com', contactNo: '9876543210', age: 22 },
    { id: 3, name: 'Tanya', email: 'tanya@gmail.com', contactNo: '1112223333', age: 19 },
    { id: 4, name: 'Manas', email: 'manas@gmail.com', contactNo: '5554447777', age: 22 },
    { id: 5, name: 'Ram', email: 'ram@gmail.com', contactNo: '9998881111', age: 21 },
    { id: 6, name: 'Sagar', email: 'sagar@gmail.com', contactNo: '3336669999', age: 19 },
    
  ];
  
function SearchUser() {
  const [Id, setId] = useState('');
  const [Details, setDetails] = useState(null);

  const Search = () => {
    const user = userData.find(user => user.id === parseInt(Id));
    if (user) {
      setDetails(user);
    } else {
      setDetails(null);
      alert('User not found!');
    }
  };

  return (
    <div className='upper'>
        <div className="inner">
        <h2>Search User</h2>
      <div className='content'>
        <input 
          type="text" 
          placeholder="Enter User ID" 
          value={Id} 
          onChange={(e) => {setId(e.target.value) ; setDetails(null);}} 
        />
    <button id='btn' onClick={Search}> 
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
     
    >
      <path
        fill="currentColor"
        d="M15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 10-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 110-8 4 4 0 010 8z"
      />
    </svg>
</button>
      </div>
      {Details && (
        <div>
          <h3>User Details</h3>
          <p><b>Name:</b> {Details.name}</p>
          <p><b>Email:</b> {Details.email}</p>
          <p><b>Contact No:</b> {Details.contactNo}</p>
          <p><b>Age:</b> {Details.age}</p>
        </div>
      )}
        </div>
      
    </div>
  );
}

export default SearchUser;
