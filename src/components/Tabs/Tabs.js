import React, {useState} from "react";
import PropTypes from 'prop-types';

class Tabs extends React.Component {
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
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                {React.Children.map(children,(child, index) => {
                    const activeClassName = (activeIndex == index) ? 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-violet-800 hover:opacity-75' : 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-violet-800 hover:opacity-75'
                    return (
                        <li className="nav-item">
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

Tabs.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

const Tab = ({children}) =>
<>{children}</>

export default Tabs;
