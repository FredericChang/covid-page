import React, {Component} from "react";
import Header from './components/Header';


let name = "Adam";
const city = "London";

class App extends Component {
  message = () => `Hello ${name}`;
  render(){
    return(
      <React.Fragment>
        <Header/>
        <h4 className="bg-primary text-white text-center p-3">
        { this.message() }
        </h4>
      </React.Fragment>
    );
  }

}

export default App;