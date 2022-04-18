import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'


const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]
class Death extends Component {
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
                            <a>Deaths</a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            These figures show how many COVID-19 patients have been reported to have died. This gives us an idea of ​​the impact of the virus. The actual number of COVID-19 patients that died may be higher because not all people with COVID-19 get tested and there is no requirement for reporting deaths due to COVID-19.</a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-start ">
                            Last values obtained on Friday, 15 April. Is updated on working days.</a>
                        </div>
                        <div class="col-start-2 col-end-6 font-sans text-xl">
                            <a class="">
                            Useful links</a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-4/6 h-12 rounded-md place-self-center">More information and data files in the 'Explanation of the data presented</button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href='https://coronadashboard.government.nl/verantwoording#deaths'>
                            Go
                                </a>
                            </button>
                        </div>
                        
                    </div>


                </>      
        )
    }

}
export default Death;