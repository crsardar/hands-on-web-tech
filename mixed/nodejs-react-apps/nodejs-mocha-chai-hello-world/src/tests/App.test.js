import React from 'react';
import ReactDOM from 'react-dom';

import {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai'

import App from '../App';

describe("Test suite for App component", function(){

  it("Only one element in App class", function(){

    const wrapper = shallow(<App />)
    expect(wrapper.find(".App")).length(1)
  })

  // it("Count number of ImageItems", () => { 
  //   const wrapper = mount(<App/>)
  //   expect(wrapper.find('Images').find('ImageItems')).length(2)
  // })

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

})

