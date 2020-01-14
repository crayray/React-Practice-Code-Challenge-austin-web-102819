import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushiIndex: 0,
    emptyPlates: [],
    wallet: 100
  };

  getNextFour = () => {
    console.log("this works");

    this.setState(prevState => {
      return { sushiIndex: prevState.sushiIndex + 4 };
    });
  };

 
  // Callback to create a eaten attribute for the app state. If the id matches the ID passed in, it will add the attribute, if it's false it just returns the sushi
  eatSushi = id => {
    const newMoney = this.state.wallet - id.price
    //This is where we want to check the wallet to make sure we have enough money. If we don't, say you've had enough. 

    this.setState(
      {
        wallet: this.state.wallet - id.price,
        sushis: this.state.sushis.map(sushi => {
          if (sushi.id === id.id) {
            sushi.eaten = true;
          }
          return sushi;
        }),
        emptyPlates: this.state.sushis.filter(sushi => sushi.eaten)
      },
      () => console.log(this.state)
    );
  };

  render() {
    let sushiDisplay;
    let tableDisplay;
    if(this.state.wallet < 5){
      <div className="app">
      </div>
      tableDisplay=  <Table
      emptyPlates={this.state.emptyPlates}
      wallet={0}
    />
      
     } else {
       sushiDisplay= <SushiContainer
       sushis={this.state.sushis}
       sushiIndex={this.state.sushiIndex}
       getNextFour={this.getNextFour}
       emptyPlates={this.state.emptyPlates}
       eatSushi={this.eatSushi}
     />;
      tableDisplay =  <Table
      emptyPlates={this.state.emptyPlates}
      wallet={this.state.wallet}
    />
     }
     
    return (
      <div className="app">
        {sushiDisplay}
        {tableDisplay}
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            sushis: data
          },

          () => {
            console.log(this.state);
          }
        );
      });
  }
}

export default App;
