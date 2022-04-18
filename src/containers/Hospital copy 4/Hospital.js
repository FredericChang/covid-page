import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'


const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]
class Hospital extends Component {
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

                    <div class="grid grid-cols-6 gap-4 text-center space-y-2">
                        <div class="col-start-2 col-span-4 font-sans text-3xl">
                            <a>
                            Hospital admissions                            </a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            A rise in the number of patients with COVID-19 could overburden hospitals. This number is also a valid indicator for epidemic growth. This section of the dashboard shows the number of patients with COVID-19 admitted to hospital and the number of regular hospital beds occupied by patients with COVID-19.</a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-start ">
                            Last values obtained on Thursday, 14 April. Is updated on working days.</a>
                        </div>
                        <div class="col-start-2 col-end-6 font-sans text-xl">
                            <a class="">
                            Useful links</a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-4/6 h-12 rounded-md place-self-center">More information on ICU admissions </button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href='https://coronadashboard.government.nl/landelijk/intensive-care-opnames'>
                            Go
                                </a>
                            </button>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-4/6 h-12 rounded-md place-self-center">Weekly update on coronavirus and hospital admissions on rivm.nl</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href='https://www.rivm.nl/coronavirus-covid-19/weekcijfers'>
                            Go
                                </a>
                            </button>
                        </div>
                        <div className="col-start-1 col-end-7 col-span-8 space-x-4 ">
                            <button className="bg-slate-200  text-black font-bold w-4/6 h-12 rounded-md place-self-center">Effectiveness of COVID-19 vaccination against hospital and intensive care admission in the Netherlands</button>
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href='https://www.rivm.nl/covid-19-vaccinatie/bescherming-coronavaccins-tegen-ziekenhuisopname'>
                            Go
                                </a>
                            </button>
                        </div>
                    </div>


                </>      
        )
    }

}
export default Hospital;