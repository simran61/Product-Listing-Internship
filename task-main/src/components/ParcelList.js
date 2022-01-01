import React, { useEffect, useState } from 'react'
import Parcel from './Parcel';
import ParcelForm from './ParcelForm';
import {db} from '../firebase-config';
import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";

function ParcelList({user}) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (user.uid)
          (async () => {
            const dataField = await getDoc(doc(db, 'users', user.uid))
            if (dataField.exists()) {
              const data = dataField.data().newTodos
              setTodos([...data])
              console.log(todos);
            }
          })()
      }, [user.uid])

    const addTodo = async (todo) => {
        if(!todo.cost){
            return ;
        }
        const dataFeild = await getDoc(doc(db, 'users', user.uid));
        var data = [], newTodos = [];
        if(dataFeild.exists()){
            data = dataFeild.data().newTodos;
            newTodos = [...data, todo];
        }
        else{
            newTodos=[todo];
        }
        setTodos(newTodos);
        console.log(newTodos);
        await setDoc(doc(db, 'users', user.uid), {newTodos});
    }
    
    return (
        <div style={{display: "flex"}, {flexDirection: "col"}, {justifyContent: "center !important"}, {alignContent: "center"}, {alignItems: "center"}}>
            {/* <h1>todo</h1> */}
            <ParcelForm onsubmit={addTodo}/>
            <Parcel todos={todos} />
        </div>
    )
}

export default ParcelList