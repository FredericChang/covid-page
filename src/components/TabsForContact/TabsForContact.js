import React, {useState} from "react";
import PropTypes from 'prop-types';

class TabsForContact extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            activeIndex: props.activeIndex
        }
    }

    tabChange = (event, index) =>{
        event.preventDefault()
        this.setState({
            activeIndex: index
        })
        this.props.onTabChange(index)
    }

    render(){
        const {children} = this.props;
        const {activeIndex} = this.state;
        return (
            <ul class="border-2 border-lime-500 space-y-8 text-lg italic font-semibold tracking-wide">
                {React.Children.map(children,(child, index) => {
                    const activeClassName = (activeIndex == index) ? 'hover:opacity-75' : 'text-violet-400 hover:opacity-75'
                    return (
                        <li className="text-center center border-2 border-yellow-600">
                            <a onClick={(event)=> {this.tabChange(event,index)}}
                                className={activeClassName}
                                href="#"
                            >
                                {child}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

TabsForContact.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

const Tab2 = ({children}) =>
<>{children}</>

export default TabsForContact;
