import React, {Component} from 'react';
import './Contact.css';
import TabsForContact from '../../components/TabsForContact'
import Tab2 from '../../components/TabsForContact'
import Hospital from '../../containers/Hospital'
import Infectious from '../../containers/Infectious'
import Death from '../../containers/Death'
import Compliance from '../../containers/Compliance'
import Death from '../../containers/Death'
import Death from '../../containers/Death'





const HospitalView = 'Hospital'
const InfectionsView = 'Infections'
const DeathView = 'Death Rates'
const ComplianceView = 'Compliance'
const OtherView = 'Other'
const UsefullinksView = 'Useful links'


const tabsText = [HospitalView,InfectionsView,DeathView,ComplianceView,OtherView,UsefullinksView]

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabView: tabsText[0]
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

    render(){
        return(
                <>

                    <div class="flex grid grid-cols-8 border-2 border-yellow-600">
                        <div class="flex col-start-1 col-end-3 border-4 border-red-600">
                                <div className='border-4 border-red-600 w-96 center'>
                                <TabsForContact activeIndex={0} onTabChange={this.changeView} class="flex">
                                    <Tab2 class="flex-none w-14 h-14">Hospital</Tab2>
                                    <Tab2 class="flex-none w-14 h-14">Infections</Tab2>
                                    <Tab2 class="flex-none w-14 h-14">Death Rates</Tab2>
                                    <Tab2 class="flex-none w-14 h-14">Compliance</Tab2>
                                    <Tab2 class="flex-none w-14 h-14">Other</Tab2>
                                    <Tab2 class="flex-none w-14 h-14">Useful links</Tab2>
                                </TabsForContact>
                                
                                    {/* <ul className="border-2 border-lime-500 space-y-8 text-lg italic font-semibold tracking-wide">
                                        <li className="text-center center border-2 border-yellow-600 rounded-md">
                                            <a className=""href=''>VACCINATIONS</a>
                                        </li>
                                        <li className="text-center center border-2 border-yellow-600">Hospital</li>
                                        <li className="text-center center border-2 border-yellow-600">Infections</li>
                                        <li className="text-center center border-2 border-yellow-600">Death Rates</li>
                                        <li className="text-center center border-2 border-yellow-600">Compliance </li>
                                        <li className="text-center center border-2 border-yellow-600">Other </li>
                                        <li className="text-center center border-2 border-yellow-600">Useful links </li>

                                    </ul> */}
                                </div>
                        </div>

                        <div class="col-end-8 col-span-5 border-4 border-yellow-800">
                            {   this.state.tabView === HospitalView &&
                             <Hospital/>
                            }
                            {   this.state.tabView === InfectionsView &&
                             <Infectious/>
                            }
                            {   this.state.tabView === DeathView &&
                             <Death/>
                            }
                            {   this.state.tabView === ComplianceView &&
                             <Compliance/>
                            }
                            {   this.state.tabView === OtherView &&
                             <div>OtherView</div>
                            }
                            {   this.state.tabView === UsefullinksView &&
                             <div>UsefullinksView</div>
                            }

                        </div>
                    </div>


                </>      
        )
    }

}
export default Contact;