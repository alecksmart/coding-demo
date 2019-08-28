/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import shallowWithStore from 'shallowWithStore';
import GameBoard from '../modules/GameBoard/index';

describe('>>> Client entry point', () => {
  it('+++ should capture the snapshot of GameBoard', () => {
    const renderedValue = shallowWithStore(
      <Provider store={store}>
        <GameBoard />
      </Provider>,
      store,
    );
    expect(renderedValue).toMatchSnapshot();
  });
});
