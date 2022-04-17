import React, {Component} from "react";
import Header from './components/Header';
import Home from './containers/home'
import Vaccinations from './containers/Vaccinations'
import Test from './containers/Test'
import Travel from './containers/Travel'




let name = "Adam";
const city = "London";

class App extends Component {
  message = () => `Hello ${name}`;
  render(){
    return(
      <React.Fragment>
        <Header/>
        {/* <Home/> */}
        {/* <Vaccinations/> */}
        {/* <Test/> */}
        <Travel/>

        {/* <h4 className="text-3xl font-bold underline">
        { this.message() }
        </h4> */}
      </React.Fragment>
    );
  }

}

export default App;