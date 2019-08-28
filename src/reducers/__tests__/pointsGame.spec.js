/**
 * More to come likewise...
 */
import reducer, { initialState } from '../pointsGame';
import {
  setNewGame,
  setGameOver,
  setCellClicked,
} from '../../actions/pointsGame';

describe('>>> Test reducers', () => {
  it('+++ should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('+++ should start the new game', () => {
    const newGameAction = {
      type: setNewGame,
    };
    const expected = { ...initialState, started: true };
    expect(reducer(initialState, newGameAction)).toEqual(expected);
  });

  it('+++ should set game to be over', () => {
    const gameOverAction = {
      type: setGameOver,
    };
    const expected = { ...initialState, started: false, isGameOver: true };
    expect(reducer(initialState, gameOverAction)).toEqual(expected);
  });

  it('+++ should add correct resultset and recalsulate all results', () => {
    const addPointAction = {
      type: setCellClicked,
      payload: { logEntry: { type: 'B' } },
    };

    const result = reducer(initialState, addPointAction);
    const expectedTotalPoints = 30;
    expect(result.total).toEqual(expectedTotalPoints);

    const result2 = reducer(result, addPointAction);
    const expectedTotalPoints2 = 90;
    expect(result2.total).toEqual(expectedTotalPoints2);
  });

});
