import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'
import CreateBtn from '../../components/CreateBtn'

import { DateTime } from "luxon";
import LineChart from '../../components/LineChart/LineChart';
// import "./Home.css";



const tabsText = ["Year", "Month", "Week", "All"]
const number = 12131
const dt = DateTime.now().toFormat('yyyy LLL dd').toString();

// const response = await fetch("../../data.json");
const setData = null



class Test extends Component {
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
                    <div class="flex">
                        <Tabs activeIndex={0} onTabChange={this.changeView} class="flex">
                            <Tab class="flex-none w-14 h-14">Summary</Tab>
                            <Tab class="flex-none w-14 h-14">Vaccinations</Tab>
                            <Tab class="flex-none w-14 h-14">Test</Tab>
                            <Tab class="flex-none w-14 h-14">Travel Information</Tab>
                            <Tab class="flex-none w-14 h-14">Contact</Tab>

                        </Tabs>
                    </div>
                    <hr></hr>

                    <div class="grid grid-cols-6 gap-4 text-center space-y-2">
                        <div class="col-start-2 col-span-4 font-sans text-3xl">
                            <a>
                            Testing for COVID-19
                            </a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            Testing is an important tool in controlling COVID-19. It allows us to keep a close eye on the spread of the coronavirus SARS-CoV-2.
                            </a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button class=" text-sky-400/75 hover:bg-indigo-200 font-bold  w-80 h-24 rounded-md border border-indigo-500">Create A test Certificate</button>
                            <button class=" text-sky-400/75 hover:bg-indigo-200 font-bold  w-80 h-24 rounded-md border border-indigo-500">Test appointment</button>
                            <button class=" text-sky-400/75 hover:bg-indigo-200 font-bold  w-80 h-24 rounded-md border border-indigo-500">Test Cancelation
                                <a href=''>
                                    
                                </a>
                            </button>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            Do I need to self-quarantine?
                            </a>
                        </div>
                        <div class="col-start-2 col-end-6">
                            <a class="text-center">
                            Choose a situation to know if you should quarantine and when to get tested. Even if you have been vaccinated or recovered.
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 place-items-center">
                        <div class=" w-80 h-40 rounded-md border border-indigo-500 shadow-md">
                            <div class="space-y-2 text-base leading-7 text-gray-600">
                                <p class="text-center">I have COVID-19</p>
                                <p class="text-center">Do you have a positive  test result? Then you have COVID-19 and you go into isolation.                                 </p>
                                <div class="flex items-center space-x-8 ml-12">
                                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="11" />
                                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                    </svg>
                                    <p class="text-center">See more details</p>
                                </div>
                            </div>
                        </div>
                        <div class=" w-80 h-40 rounded-md border border-indigo-500 shadow-md">
                            <div class="space-y-2 text-base leading-7 text-gray-600">
                                    <p class="text-center">I think I have COVID-19</p>
                                    <p class="text-center">Do you have a positive self-test result or COVID-19 symptoms? Then you go into self-quarantine.</p>
                                    <div class="flex items-center space-x-8 ml-12">
                                        <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="11" />
                                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                        </svg>
                                        <p class="text-center">See more details</p>
                                    </div>
                                </div>
                            </div>
                        <div class=" w-80 h-40 rounded-md border border-indigo-500 shadow-md">
                        <div class="space-y-2 text-base leading-7 text-gray-600">
                                    <p class="text-center">I think I have COVID-19</p>
                                    <p class="text-center">Do you have a positive self-test result or COVID-19 symptoms? Then you go into self-quarantine.</p>
                                    <div class="flex items-center space-x-8 ml-12">
                                        <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="11" />
                                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                        </svg>
                                        <p class="text-center">See more details</p>
                                    </div>
                                </div>
                        </div>
                    </div>

                </>      
        )
    }

}
export default Test;