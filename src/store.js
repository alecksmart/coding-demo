import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  devToolsEnhancer(),
);
export default store;
