import React from 'react';
import Particles from 'react-particles-js';
import { particleOpt } from '../logic/Config.js';
import { size } from '../logic/Config.js';

import './Content.scss';


export default class Content extends React.Component {


    render() {

        const sloganOne = 'engineering';
        const sloganTwo = 'without';
        const sloganThree = 'bullshit';
        const subSlogan = 'complete. agile. solutions.';

        return (
            <div className='section_wrapper'>
                <div className='mcb-wrap one clearfix'>
                    <div className='column'>
                        <div className='home-landing-slogan'>
                            <div className='animated fadeInUp slow'>{sloganOne}</div>
                            <div className='animated fadeInUp slow'>{sloganTwo}</div>
                            <span className='home-landing-slogan-bullshit gradient-text animated fadeInUp slow'>{sloganThree}
                                <span className='line_through animated fadeInLeft slow delay-2s'></span>
                            </span>
                        </div>
                        <hr className='no_line'></hr>
                        <h2 className='page-hero__subtitle__line animated fadeInUp slow'>{subSlogan}</h2>
                        <div id='particles-js' className='animated fadeIn slow delay-3s'>
                            <Particles width={size.width} height={size.height} params={particleOpt} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}