import React from 'react';
import { menuItems } from '../logic/MenuItems.js';

import './NavBar.scss';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavbarOpen: false
        }
    }

    handleMenuButtonClick = () => {
        this.setState({ isNavbarOpen: !this.state.isNavbarOpen })
    };

    render() {

        const { isNavbarOpen } = this.state;

        return (
            <div id='Header_wrapper'>
                <header id='Header'>
                    <div id='Top_bar'>
                        <div className='container'>
                            <div className='top_bar_left animated fadeIn slow'>
                                <div className='logo'>
                                    <a id='logo' href='https://boxfish.studio' title='Boxfish Studio' data-height='60' data-padding='15'>
                                        <img className='scale-with-grid' src='https://boxfish.studio/wp-content/uploads/2019/08/Boxfish-Studio-3_t.png'
                                            data-retina='https://boxfish.studio/wp-content/uploads/2019/08/Boxfish-Studio-3_tt.png' data-height='226' alt='Boxfish Studio 3_t'>
                                        </img>
                                    </a>
                                </div>
                                <div className='menu_wrapper'>
                                    <nav id='menu' className={`nav ${isNavbarOpen ? 'show animated fadeInDown' : 'hide'}`}>
                                        {menuItems.length && (
                                            <ul className='menu'> {menuItems.map(item => (
                                                <li key={item.label} className='menu-item'>
                                                    <a href={item.url}><span>{item.label}</span></a>
                                                </li>
                                            ))} </ul>
                                        )}
                                    </nav>
                                    <div className='responsive-menu-toggle' onClick={this.handleMenuButtonClick}>
                                        <i className='fas fa-bars'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
