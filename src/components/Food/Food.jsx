import React from 'react'

const Food = (props) => {
    const { userId, id, title, completed } = props.food
  return (
      <>
          <div className="foods">
              <h1>Inside Data Works</h1>
              <h3>ID: {id}</h3>
              <h3>userId: {userId}</h3>
              <h3>Title: {title}</h3>
              <h3>Completed: {completed == true ? "true" : "false"}</h3>
        

          </div>
    </>
  )
}

export default Food