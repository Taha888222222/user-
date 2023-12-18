import { FAIL_USERS, GET_USER, GET_USERS, LOAD_USERS } from "../actiontype/user";

import axios from "axios"


export const getUsers = ()=> async (dispatch) =>{
    dispatch({type: LOAD_USERS}) ;
    try{
        let result = await axios.get("/api/user/all");
        dispatch({ type:GET_USERS, payload : result.data});
    }catch (error) {
        dispatch ({type : FAIL_USERS, payload:error.response})
    }
};

export const addUser = (newUser)=> async (dispatch) =>{
    try{
        await axios.post("/api/user/add", newUser);
        dispatch(getUsers());
    }catch (error) {
        dispatch ({type : FAIL_USERS, payload:error.response})
    }
};

export const deleteUser = (id)=> async (dispatch) =>{
    try{
        await axios.delete(`/api/user/${id}`);
        dispatch(getUsers());
    }catch (error) {
        dispatch ({type : FAIL_USERS, payload:error.response})
    }
};

export const editUser = (id, newUser)=> async (dispatch) =>{
    try{
        await axios.put(`/api/user/${id}`, newUser);
        dispatch(getUsers());
    }catch (error) {
        dispatch ({type : FAIL_USERS, payload:error.response})
    }
};

export const getUser = (id)=> async (dispatch) =>{
    dispatch({type: LOAD_USERS}) ;
    try{
        let result = await axios.get(`/api/user/${id}`);
        dispatch({ type:GET_USER, payload : result.data});
    }catch (error) {
        dispatch ({type : FAIL_USERS, payload:error.response})
    }
};