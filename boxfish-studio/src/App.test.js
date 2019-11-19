import React from 'react';
import { mount } from "enzyme";
import App from "./App";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

HTMLCanvasElement.prototype.getContext = () => { 
    // return whatever getContext has to return
  }

describe('<App/>', () => {
    it('Renders without crashing', () => {
        const app = mount(<App />);
        expect(app.find('.home-landing-slogan-bullshit').text()).toEqual('bullshit');
    });
});
