import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const navigate = useNavigate()
    const users = props.users;
    const setUsers = props.setUsers;

    const [enteredUserName, setEnteredUserName] = useState();
    const [enteredPwd, setEnteredPwd] = useState();

    function handleUInput(evt) {
        setEnteredUserName(evt.target.value)
    }

    function handleUPnput(evt) {
        setEnteredPwd(evt.target.value)
    }

    function addUser() {
        setUsers([...users, { username: enteredUserName, password: enteredPwd }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-slate-200 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I Help You Manage Your activiti  es after you login :)</p>


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUInput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handleUPnput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password" />
                    <button className="bg-blue-500 w-24 p-1 rounded-md" onClick={addUser}>Sign up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp