import React,{useEffect,useState} from "react";
import { Form,Button } from "react-bootstrap"; 
import { useDispatch,useSelector } from "react-redux";
import { useMatch,useNavigate } from "react-router-dom";

import { editUser, getUser } from "../actions/user";


const Edit=()=> {
    const [newUser,setNewUser]=useState({});
    const dispatch=useDispatch();
    const match=useMatch("/edit/:id");
    console.log (match.params.id)
    const navigate=useNavigate();
    const userToGet = useSelector(
        (state) => state.userReducer.userToGet
    );
    console.log(userToGet) 
    const handeleChange=(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value});
    };
    useEffect(()=>{dispatch(getUser(match.params.id))});

    const handeleEdit =()=>{
        dispatch(editUser(match.params.id,newUser));
        navigate(-1);

    }
    return(
        <div>
            <Form.Label>name</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${userToGet.name}`}
        name='name'
        value={newUser.name}
        onChange={handeleChange}

      />

<Form.Label>email adress</Form.Label>
      <Form.Control
        type="email"
        placeholder={`${userToGet.email}`}
        name='email'
        value={newUser.email}
        onChange={handeleChange}

      />

<Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${userToGet.phone}`}
        name='phone'
        value={newUser.phone}
        onChange={handeleChange}

      />


        <Button variant="primary" type='submit'onClick={handeleEdit}>Edit</Button>

        </div>
    );
};

export default Edit;