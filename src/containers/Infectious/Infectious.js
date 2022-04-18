import React, {useState, useEffect, useRef, Component} from 'react';
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs'


const A = 'A'
const C = 'C'
const B = 'B'
const D = 'D'
const E = 'E'


const tabsText = [A,B,C,D,E]
class Infectious extends Component {
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
                    <div class="grid grid-cols-6 gap-4 text-center space-y-2">
                        <div class="col-start-2 col-span-4 font-sans text-3xl">
                            <a>Infectious people</a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-center">
                            A person who carries coronavirus can infect other people within a certain time frame. If more people are infectious the virus spreads faster. It is not possible to know exactly how many people are infectious, but we can indicate whether there are dozens, hundreds, thousands or even more.</a>
                        </div>
                        <div class="col-start-2 col-end-6 col-span-2">
                            <a class="text-start ">
                            Last values obtained on Friday, 9 July. Will not be updated anymore.</a>
                        </div>
                        <div class="col-start-2 col-end-6 font-sans text-xl">
                            <a class="">
                            Useful links</a>
                        </div>
                        <div class="col-start-1 col-end-7 col-span-8 space-x-4 ">
                        <button class="bg-slate-200  text-black font-bold w-4/6 h-12 rounded-md place-self-center">More information and data files in the 'Explanation of the data presented' </button>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-1/6 h-12 rounded-md place-self-center shadow-2xl">
                            <a href='https://coronadashboard.government.nl/verantwoording#infectious-people'>
                            Go
                                </a>
                            </button>
                        </div>

                    </div>


                </>      
        )
    }

}
export default Infectious;