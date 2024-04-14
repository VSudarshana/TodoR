import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

const TodoContainer = () => {

    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go For a Walk",
        },

        {
            id: 2,
            activity: "Have BreakFast"
        },

        {
            id: 3,
            activity: "Take a shower"
        },
    ]);

    return (
        <div>
            <div className="flex gap-8 flex-wrap mt-7 flex-grow">
                <AddToDoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
                <ToDoList activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer;