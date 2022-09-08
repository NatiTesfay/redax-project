import React from 'react';
import { useState } from 'react';
import { connect} from 'react-redux';
import {addUsers} from '../../stores/actions'

const MapStateToProps=(state)=>{
return{user:state.users};
};
const MapDispatchToProps = (dispatch)=>({
 addNewUser : (newUser)=> dispatch(addUsers(newUser))
})


const Home = (props) => {
  const [user,setUser]=useState({})
  const changeInput = (e)=>{
   user[e.target.name]= e.target.value;
  }
  return (
    <>
    <h1>My-from</h1>
    <input name='fName' onChange={changeInput} type="text" />
    <input name='lName' onChange={changeInput} type="text" />
    <input name='age' onChange={changeInput} type="age" />
    <input name='email' onChange={changeInput} type="email" />
    <button onClick={()=>props.addNewUser(user)}>Change</button>
    {/* <p>{props.users.fName}</p> */}
    </>
  );
}

export default connect(MapStateToProps,MapDispatchToProps)(Home);