/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import store from '../../../store';
import shallowWithStore from 'shallowWithStore';
import Results from '../index';

const context = {
  pointsGame: {
    started: false, isGameOver: false, bonuses: 0, total: 30, highest: 0, log: [{ type: 'B' }],
  },
};

describe('>>> Client entry point', () => {
  it('+++ should capture the snapshot of Cell', () => {
    const renderedValue = shallowWithStore(
      <Results store={store} />,
      context,
    );
    expect(renderedValue).toMatchSnapshot();
  });
});
