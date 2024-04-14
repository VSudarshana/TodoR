import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const navigate = useNavigate()
    const [enteredUserName, setEnteredUserName] = useState();
    const [enteredPwd, setEnteredPwd] = useState();
    const [ruser, setRuser] = useState(true);

    const users = props.users;

    function checkUser() {
        var userfound = false;
        users.forEach(function (item) {
            if (item.username === enteredUserName && item.password === enteredPwd) {
                console.log("Login SuccessFull");
                userfound = true;
                navigate("/landing", { state: { user: enteredUserName } })
            }
        })

        if (userfound === false) {
            console.log("login Failed")
            setRuser(false);
        }
    }

    function handleUInput(evt) {
        setEnteredUserName(evt.target.value)
    }

    function handleUPnput(evt) {
        setEnteredPwd(evt.target.value)
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-slate-200 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I Help You Manage Your activities after you login :)</p> :
                    <p className="text-red-500">Please Sign Up Before You Login </p>}


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" />
                    <input type="text" onChange={handleUPnput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" />
                    <button className="bg-blue-500 w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login