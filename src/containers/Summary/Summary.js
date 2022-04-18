import React, {useState, useEffect, useRef, Component} from 'react';
import CreateBtn from '../../components/CreateBtn'

import { DateTime } from "luxon";
import LineChart from '../../components/LineChart/LineChart';

const tabsText2 = ["Year", "Month", "Week", "All"]
const number = 12131
const dt = DateTime.now().toFormat('yyyy LLL dd').toString();

const setData = null

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

class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            counter:0,
            
        }
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

                    <div class="flex flex-nowrap">
                        <div class="w-1/2 h-12 text-center py-1"><CreateBtn  theme = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-20 rounded-full" onClick={this.incrementCounter} name="Year"/></div>
                        <div class="w-1/2 h-12 text-center py-1"><CreateBtn  theme = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-20 rounded-full" onClick={this.incrementCounter} name="Month"/></div>
                        <div class="w-1/2 h-12 text-center py-1"><CreateBtn  theme = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-20 rounded-full" onClick={this.incrementCounter} name="Week"/></div>
                        <div class="w-1/2 h-12 text-center py-1"><CreateBtn  theme = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-20 rounded-full" onClick={this.incrementCounter} name="All"/></div>
                    </div>
                    <div class="flex flex-nowrap">
                        <div class="basis-1/2">
                            <ul class="space-y-4 font-sans text-lg">
                                <li class="flex items-center">
                                    <p class="ml-4 font-bold font-sans text-lg">
                                        People vaccinated
                                    </p>
                                </li>
                                <li class="flex items-center font-sans">
                                <p class="ml-4 font-sans">
                                    Up to and including {dt}
                                </p>
                                </li>
                                <li class="flex items-center font-sans">
                                    <p class="ml-4 font-sans ">Daily-first dose:</p>
                                    <p class="ml-4 font-sans ">{this.state.counter}</p>

                                </li>
                                <li class="flex items-center font-sans">
                                    <p class="ml-4">Tested:</p>
                                    <p class="ml-4">{this.state.counter}</p>

                                </li>
                                <li>
                                    <LineChart data={items} />
                                </li>
                                
                            </ul>
                        </div>
                        <div class="basis-1/2">
                            <ul class="space-y-4">
                                <li class="flex items-center">
                                    <p class="ml-4">
                                    Deaths
                                    </p>
                                </li>
                                <li class="flex items-center">
                                <p class="ml-4">
                                    Up to and including {dt}
                                </p>
                                </li>
                                <li class="flex items-center">
                                    <p class="ml-4">Deaths within 28 days of positive test: {number}</p>
                                </li>
                                <li class="flex items-center">
                                    <p class="ml-4">Tested: {number}</p>
                                </li>
                                <li>
                                    <LineChart data={items} />
                                </li>
                                
                            </ul>
                        </div>
                        <div class="basis-1/2">
                            <ul class="space-y-4">
                                <li class="flex items-center">
                                    <p class="ml-4">
                                        People infected
                                    </p>
                                </li>
                                <li class="flex items-center">
                                <p class="ml-4">
                                    Up to and including {dt}
                                </p>
                                </li>
                                <li class="flex items-center">
                                    <p class="ml-4">Positive Case: {number}</p>
                                </li>
                                <li class="flex items-center">
                                    <p class="ml-4">Tested: {number}</p>
                                </li>
                                <li>
                                    <LineChart data={items} />
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </>      
        )
    }

}
export default Summary;