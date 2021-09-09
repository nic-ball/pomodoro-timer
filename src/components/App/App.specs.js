import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
// import { describe } from 'yargs';
// import { expect, it } from '@jest/globals';

describe('App', () => {
  it('should render a <div />', () => {
    const container = shallow(<App />);

expect(container.find('div').length).toEqual(1);
  });
});
