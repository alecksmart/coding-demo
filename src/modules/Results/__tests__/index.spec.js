/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import { mockStore, shallowWithStore, mountWithStore } from 'testUtils';
import initialState from 'initialState';

import Results from '../index';

let wrap;
let wrapper;
let props = {
  bonuses: 0,
  total: 0,
  highest: 0,
  log: [],
};
let context = initialState;
let stateChanged = {};
let propsChanged = {};
let useMount = true;

const store = mockStore(initialState);

describe('>>> Results snapshot', () => {
  beforeEach(() => {
    wrap = () => {
      context = { ...initialState, ...stateChanged };
      props = { ...props, ...propsChanged };
      return (useMount ? mountWithStore : shallowWithStore)(<Results store={store} {...props} />, context);
    };
  });

  afterEach(() => {
    wrapper.unmount();
    useMount = true;
    stateChanged = {};
    propsChanged = {};
  });

  it('+++ should capture the snapshot of Results', () => {
    useMount = false;
    wrapper = wrap();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
