import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../';


describe('App', function () {
  it('should render', function () {
    const instance = shallow(<App />);
    expect(instance.find('Navigator')).to.have.lengthOf(1);
  });
});
