import React from 'react';
import { connect} from 'react-redux';

const MapStateToProps=(state)=>{
return{...state,user:state.user};
};
const MapDispatchToProps = (dispatch)=>({
 createUser : (newUser)=> dispatch(createUserAction(newUser))
})


const Home = () => {
  const changeUser = ()=>{
    props.changeUser({users:{fName:"Dalia"}})
  }
  return (
    <>
    <div>Home</div>
    <p>{props.users.fName}</p>
    <button onClick={changeUser}>Change</button>
    </>
  );
}

export default connect(MapStateToProps,MapDispatchToProps)(Home);