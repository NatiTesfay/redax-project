import React from 'react';
import { useState } from 'react';
import { connect} from 'react-redux';
import {addUsers} from '../../stores/actions/users-action'

const MapDispatchToProps = (dispatch)=>({
 addNewUser : (newUser)=> dispatch(addUsers(newUser))
});


const UpdateForm = ({ user, updateSomeUser }) => {
  const [toggle, setToggle] = useState(false);
  const changeInput = (e) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <>
    <h1>{user.fName}</h1>
    <button onClick={() => setToggle(!toggle)}>
      {toggle ? "X" : "update user"}{" "}
    </button>
    <div className={toggle ? "show" : "hide"}>
      <div className="my-form">
        <label htmlFor="">first name</label>
        <input
          defaultValue={user.fName}
          name="fName"
          onChange={changeInput}
          type="text"
        />
        <label htmlFor="">last name</label>
        <input
          defaultValue={user.lName}
          name="lName"
          onChange={changeInput}
          type="text"
        />
        <label htmlFor="">age</label>
        <input
          defaultValue={user.age}
          name="age"
          onChange={changeInput}
          type="number"
        />
        <label htmlFor="">email</label>
        <input
          defaultValue={user.email}
          name="email"
          onChange={changeInput}
          type="email"
        />
        <button onClick={() => updateSomeUser(user)}>add</button>
      </div>
    </div>
  </>
  );
}

export default connect(null,MapDispatchToProps)(UpdateForm);