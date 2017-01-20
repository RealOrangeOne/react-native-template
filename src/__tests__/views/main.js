import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Main from '../../views/Main';


describe('Main View', function () {
  it('should render', function () {
    const instance = shallow(<Main nav={{ push: () => {}}} />);
    expect(instance).to.be.ok;
  });
});
