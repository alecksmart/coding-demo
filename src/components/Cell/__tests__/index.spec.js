/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import store from '../../../store';
import shallowWithStore from 'shallowWithStore';
import Cell from '../index';

describe('>>> Client entry point', () => {
  it('+++ should capture the snapshot of Cell', () => {
    const renderedValue = shallowWithStore(
      <Cell store={store} />,
      store,
    );
    expect(renderedValue).toMatchSnapshot();
  });
});
