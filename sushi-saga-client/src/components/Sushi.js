import React, { useState } from 'react'

const Sushi = (props) => {
  const log  = () => {
    console.log(props)
  }

  
  const[isClicked, setClick] = useState(false);



  return (
    <div className="sushi">
      <div className="plate" onClick={() => setClick(true)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isClicked ?
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