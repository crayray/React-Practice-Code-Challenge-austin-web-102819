import React, { useState } from 'react'

const Sushi = (props) => {
 

 
  // const[isClicked, setClick] = useState(false);


  return (
    <div className="sushi">
    {/* Here we're passing in the id of the specific sushi back to the eatSushi function in APP which CAN change the state.  */}
      <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
      {console.log(props.sushi)}
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eaten ?
            null
          :
            <img src={props.url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi