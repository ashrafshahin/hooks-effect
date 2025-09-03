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
  

  return (
    <>
      
      {
        data.map((item) => (
           
          <div>
            <Shahin sohel={item} />
            <Food food={item} />
          </div>
     
        ))
      }
      
    </>
  )
}

export default App
