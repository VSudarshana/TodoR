import ToDoItem from './ToDoItem';

function ToDoList(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    return (
        <div>
            <div className='bg-gray-400 rounded-xl p-5'>
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {activityArr.length === 0 ? <p>You haven't added any activity yet</p> : ""}
                {
                    activityArr.map((item, index) => {
                        return (
                            <ToDoItem activity={item.activity} id={item.id} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                        );
                    })
                }
            </div>
        </div >
    );
}

export default ToDoList;