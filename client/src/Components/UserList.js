import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";




import { getUsers } from "../actions/user";
import UserCard from "./UserCard";

const UserList =()=>{
    const dispatch=useDispatch();
    const listUsers = useSelector(
        (state)=> state.userReducer.listUsers
    );
    const load= useSelector((state)=>state.userReducer.load);
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]);

    return(
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap:'Wrap',
            justifycontent:'space-around',
            marginTop: '100px'
        }}>
            {load ?(
                <h2>loadinggg...</h2>
            ):(listUsers.map((el)=><UserCard user={el} key={el._id}/>))}
         </div>
    );
};

export default UserList