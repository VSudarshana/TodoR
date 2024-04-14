import { useLocation } from "react-router-dom"
import Card from "../components/Card";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";

const Landing = () => {
  const data = useLocation();
  return (

    <div>
      <div className="bg-black p-16">
      <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 border rounded-xl p-10">
        <Header name={data.state.user} />

        <div className="flex justify-between gap-7 my-5 flex-wrap mt-7">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"July"} subtitle={"14:09"} />
          <Card bgcolor={"#FFA756"} title={"Built Using"} subtitle={"React"} />
        </div>
        <TodoContainer />
      </div>
    </div>
    </div>
  )
}

export default Landing