import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Main from '../../views/Main';


describe('Main View', function () {
  it('should render', function () {
    const instance = shallow(<Main nav={{ push: () => {}}} />);
    expect(instance.find('Text')).to.have.lengthOf(3);
    expect(instance.find('Button')).to.have.lengthOf(1);
    expect(instance.find('Button').at(0).prop('title')).to.equal('Keep Going...');
  });
});
