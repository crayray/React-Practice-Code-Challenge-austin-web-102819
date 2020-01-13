import React, { useState } from 'react'

const Sushi = (props) => {
 

 
  // const[isClicked, setClick] = useState(false);


  return (
    <div className="sushi">
    {/* Here we're passing in the id of the specific sushi back to the eatSushi function in APP which CAN change the state.  */}
      <div className="plate" onClick={() => props.eatSushi(props.sushi.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eaten ?
            null
          :
            <img src={props.url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi