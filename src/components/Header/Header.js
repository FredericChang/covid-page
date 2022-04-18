import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <header className='gov-header' role="banner" >
                <div className='gov-header__container'>
                    <a href="https://coronavirus.data.gov.uk"
                    className='gov-header__link'> 
                        <span className="gov-header__name">
                            Coronavirus (COVID-19) in the area
                        </span>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;