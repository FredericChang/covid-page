import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'


const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]
class Travel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabView: tabsText[0]
        }

    }
    

    changeView = (index) => {
        this.setState({
            tabView: tabsText[index]
        })
        console.log(index);
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
                    {/* <div> fff{this.state.tabView}</div> */}
                    <div class="grid grid-cols-6 gap-4 text-center space-y-2">
                        <div class="col-start-2 col-span-4 font-sans text-3xl">
                            <a>
                            COVID-19 and flying to this country: health declaration form                            </a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            All travellers aged 12 or older who are flying to or from the Netherlands must carry a health declaration. The declaration states whether you have any symptoms of coronavirus infection (COVID-19). You must complete the declaration before your flight. If you have no symptoms you may board the aircraft.                            </a>
                        </div>

                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center  font-sans text-3xl">
                            Information for passengers flying to this country                            </a>
                        </div>
                        <div class="col-start-2 col-end-6">
                            <a class="text-center">
                            Please read more information about the documents you need in the:                              </a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-3/6 h-12 rounded-md place-self-center">checklist for entering  to this country from abroad</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href=''>
                            Go
                                </a>
                            </button>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-3/6 h-12 rounded-md place-self-center">checklist for returning to this country from abroad</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href=''>
                            Go
                                </a>
                            </button>
                        </div>
                        <div className="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button className="bg-slate-200  text-black font-bold w-3/6 h-12 rounded-md place-self-center">checklist for transit or short stay in this country</button>
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
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
export default Travel;