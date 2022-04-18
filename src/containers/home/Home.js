import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'
import CreateBtn from '../../components/CreateBtn'
import Contact from '../Contact'
import Summary from '../Summary'
import Test from '../Test'
import Vaccinations from '../Vaccinations'
import Travel from '../Travel'





import { DateTime } from "luxon";
import LineChart from '../../components/LineChart/LineChart';
// import "./Home.css";

const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]

const tabsText2 = ["Year", "Month", "Week", "All"]
const number = 12131
const dt = DateTime.now().toFormat('yyyy LLL dd').toString();

// const response = await fetch("../../data.json");
const setData = null

// const loadData = async () => {
//     response = await fetch("../../data.json");
//     setData = await response.json();
//   };


// async function loadNames() {
//     const response = await fetch('../../data.json');
//     const names = await response.json();

//     console.log(names); 
// // logs [{ name: 'Joker'}, { name: 'Batman' }]
// }

const items = [
    { "y": "1.67" },
    { "y": "4.2" },
    { "y": "3.8" },
    { "y": "8.1" },
    { "y": "5.3" },
    { "y": "7.2" },
    { "y": "9.1" },
    { "y": "1.8" },
    { "y": "0.2" },
    { "y": "6.4" },
    { "y": "10.0" },
    { "y": "7.6" },
    { "y": "8.2" },
    { "y": "8.1" },
    { "y": "4.1" },
    { "y": "9.2" },
    { "y": "3.7" },
    { "y": "2.4" },
    { "y": "9.9" },
    { "y": "2.8" }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            counter:0,
            tabView: tabsText[4]
            
        }
    }
    

    changeView = (index) => {
        this.setState({
            tabView: tabsText[index],
        })
    }

    buttonClick = () => {
        console.log("")
    }
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
        console.log(this.state.counter)
        console.log("asd")
    }

    
    render(){
        return(
                <>
                    <div className='lg:flex flex-grow items-center'>
                        <Tabs activeIndex={0} onTabChange={this.changeView} class="flex">
                            <Tab class="flex-none w-14 h-14">Summary</Tab>
                            <Tab class="flex-none w-14 h-14">Vaccinations</Tab>
                            <Tab class="flex-none w-14 h-14">Test</Tab>
                            <Tab class="flex-none w-14 h-14">Travel Information</Tab>
                            <Tab class="flex-none w-14 h-14">Contact</Tab>
                        </Tabs>
                    </div>
                    <hr></hr>
                    {   this.state.tabView === A &&
                        <Summary/>
                    }
                    {   this.state.tabView === B &&
                        <Vaccinations/>
                    }
                    {   this.state.tabView === C &&
                        <Test/>
                    }
                    {   this.state.tabView === D &&
                        <Travel/>
                    }
                    {   this.state.tabView === E &&
                        <Contact/>
                    }


                </>      
        )
    }

}
export default Home;