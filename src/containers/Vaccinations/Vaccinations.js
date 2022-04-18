import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'
import CreateBtn from '../../components/CreateBtn'

import { DateTime } from "luxon";
import LineChart from '../../components/LineChart/LineChart';
// import "./Home.css";



const tabsText1 = ["Year", "Month", "Week", "All"]
const number = 12131
const dt = DateTime.now().toFormat('yyyy LLL dd').toString();

// const response = await fetch("../../data.json");
const setData = null

const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]

class Vaccinations extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    {/* <div class="flex">
                        <Tabs activeIndex={0} onTabChange={this.changeView} class="flex">
                            <Tab class="flex-none w-14 h-14">Summary</Tab>
                            <Tab class="flex-none w-14 h-14">Vaccinations</Tab>
                            <Tab class="flex-none w-14 h-14">Test</Tab>
                            <Tab class="flex-none w-14 h-14">Travel Information</Tab>
                            <Tab class="flex-none w-14 h-14">Contact</Tab>

                        </Tabs>
                    </div>
                    <hr></hr> */}

                    <div class="grid grid-cols-6 gap-4 text-center space-y-4">
                        <div class="col-start-2 col-span-4 font-sans text-3xl">
                            <a>
                            COVID certificate for travel (for people living in this country)
                            </a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            A coronavirus pass allows you to travel safely to countries where a certificate is required. You can create a certificate if you’ve been vaccinated, if you’ve been tested and don’t have coronavirus, or if you’ve had coronavirus and have recovered.
                            </a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button class=" text-sky-400/75 font-bold  w-80 h-24 rounded-md border border-indigo-500">Create A vaccination Certificate</button>
                            <button class="bg-slate-200  text-black font-bold w-80 h-24 rounded-md place-self-center">I received a (booster) vaccination</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-10 h-24 rounded-md place-self-center shadow-2xl">
                                <a href=''>
                                    Go
                                </a>
                            </button>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button class=" text-sky-400/75 font-bold  w-80 h-24 rounded-md border border-indigo-500">Create A recovery Certificate</button>
                            <button class="bg-slate-200  text-black font-bold w-80 h-24 rounded-md place-self-center">The test proves I have had coronavirus</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-10 h-24 rounded-md place-self-center shadow-2xl">
                            <a href=''>
                            Go
                                </a>
                            </button>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button class=" text-sky-400/75 font-bold  w-80 h-24 rounded-md border border-indigo-500">Vaccination  appointment</button>
                            <button class="bg-slate-200  text-black font-bold w-80 h-24 rounded-md place-self-center">Making an appointment</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-10 h-24 rounded-md place-self-center shadow-2xl">
                            <a href=''>
                            Go
                                </a>
                            </button>
                        </div>

                    </div>

                </>      
        )
    }

}
export default Vaccinations;