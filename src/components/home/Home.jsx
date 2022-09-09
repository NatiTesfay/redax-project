import React from 'react';
import { useState } from 'react';
import { connect} from 'react-redux';
import {addUsers} from '../../stores/actions/users-action'

const MapStateToProps=(state)=>{
return{user:state.users};
};
const MapDispatchToProps = (dispatch)=>({
 addNewUser : (newUser)=> dispatch(addUsers(newUser))
})


const Home = (props) => {
  const [user,setUser]=useState({fName:"nati",lName:"tesfay",age:50,email:"netaneltes66@gmail.com"})
  const changeInput = (e)=>{
   user[e.target.name]= e.target.value;
  }
  return (
    <>
    <h1>My-from</h1>
    <label htmlFor="first name">first name</label>
    <input name='fName' onChange={changeInput} type="text" />
    <br />
    <label htmlFor="last name">last lName</label>
    <input name='lName' onChange={changeInput} type="text" />
    <br />
    <label htmlFor="age">age</label>
    <input name='age' onChange={changeInput} type="age" />
    <br />
    <label htmlFor="email">email</label>
    <input name='email' onChange={changeInput} type="email" />
    <br />
    <button onClick={()=>props.addNewUser(user)}>Add Changing</button>
    {/* <p>{props.users.fName}</p> */}
    </>
  );
}

export default connect(MapStateToProps,MapDispatchToProps)(Home);