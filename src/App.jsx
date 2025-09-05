import { useEffect, useState } from "react"
import Shahin from "./components/Shahin/Shahin"
import toDos from "./components/toDos-work/toDos"
import Food from "./components/Food/Food"



function App() {
  // inside data display
  const food = toDos
  
  // outside data fetching
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data))
    
  },[])
  // console.log(data,"check");
  // console.log(setData);
  
  // usestate in two buttons
  const [jojo, setJojo] = useState(10)
  const Increment = () => {
    if (jojo < 20) {
      setJojo(jojo => jojo + 1);
    } else {
      setJojo("set to stop in 20")
    }
  }
  const Decrement = () => {
    if (jojo > 0) {
      setJojo(jojo => jojo - 1)
    }
    else {
      setJojo("set to stop in Zero")
    }
  }

  return (
    <>
      <div className="jojo">
        <h1 style={{ color: "green", padding: "20px", backgroundColor: "yellow", textAlign: "center", fontSize: "50px", width: "500px", margin: "20px" }}> {jojo} </h1>
        
        <button className="buttonI" onClick={Increment}>Increment</button>
        <button className="buttonD" onClick={Decrement}>Decrement</button>
      </div>
      
      
      <div className="shahin">
        {
          data.map((item) => (

            <div>
              <Shahin sohel={item} />
              <Food food={item} />
            </div>

          ))
        }
      </div>
      
    </>
  )
}

export default App
