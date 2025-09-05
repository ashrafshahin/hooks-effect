import React from 'react'

const Shahin = (props) => {

    const { userId, id, title, completed } = props.sohel
  return (
      <>
          <div className="demo">
              <h1>Outsite Data Works</h1>
              <h3>ID: {id} </h3>
              <h3>User ID: {userId} </h3>
              <h3>Title: {title} </h3>
              <h3>Completed: {completed == true? "true" : "false" }</h3>

          </div>
      </>
  )
}

export default Shahin