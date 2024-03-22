import { useState } from "react";
import ListEntryForm from "./ListEntryForm";
import DisplayList from "./DisplayList";
export default function TodoListApp(){
    const [ToDolist,setToDolist]=useState([]);
    return <div>
    <ListEntryForm ToDolist={ToDolist} setToDolist={setToDolist}/>
    <DisplayList ToDolist={ToDolist} setToDolist={setToDolist}/>
    </div>
    }

