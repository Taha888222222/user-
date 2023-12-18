import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import { addUser } from '../actions/user'

const Add = () => {
    const [newUser,setNewUser]= useState({});
    const dispatch=useDispatch();
    const handeleChange=(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value});
    };
    const add=()=>{
        dispatch(addUser(newUser));

    };
  return (
    <div>
   <Form.Label>name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name='name'
        value={newUser.name}
        onChange={handeleChange}

      />
         <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name='email'
        value={newUser.email}
        onChange={handeleChange}

      />
         <Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter phone"
        name='phone'
        value={newUser.phone}
        onChange={handeleChange}

      />
      <Link to='/user'>
        <Button variant="primary" type='submit'onClick={()=>add()}>Add</Button>
      </Link>
    </div>
  )
}

export default Add