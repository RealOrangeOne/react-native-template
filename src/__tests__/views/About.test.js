import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from '../../views/About';


describe('About View', function () {
  it('should render', function () {
    const instance = shallow(<About />);
    expect(instance.find('Text')).to.have.lengthOf(1);
    expect(instance.find('Button')).to.have.lengthOf(1);
    expect(instance.find('Button').at(0).prop('title')).to.equal('Read More');
    expect(instance.find('Text').at(0).prop('children')).to.equal('Welcome to React Native!');
  });
});
