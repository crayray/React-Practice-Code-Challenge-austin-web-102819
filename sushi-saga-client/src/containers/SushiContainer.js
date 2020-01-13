import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
 
  const filterSushi = () =>  props.sushis.slice(props.sushiIndex, props.sushiIndex + 4 )
 
  // const showMoreSushi = (e, slicedArray) => {
  //   console.log(slicedArray)
  // }


  return (
    <Fragment>
      <div className="belt">
        {filterSushi().map(sushi => (
          <Sushi url={sushi.img_url}  sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} />
        ))
      }
    
     
        <MoreButton  getNextFour={props.getNextFour} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
