import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {loadRestaurants} from '../restaurants/actions';

const records = [
  {id: 1, name: 'Sushi Place'},
  {id: 2, name: 'Pizza Place'},
];

describe('when loading succeeds', () => {
  let store;
  beforeEach(() => {
    const api = {
      loadRestaurants: () => Promise.resolve(records),
    };

    const initialState = {
      records: [],
    };

    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk.withExtraArgument(api)),
    );

    return store.dispatch(loadRestaurants());
  });

  it('stores the restaurants', () => {
    expect(store.getState().records).toEqual(records);
  });

  it('clears the loading flag', () => {
    expect(store.getState().loading).toEqual(false);
  });
});

describe('while loading', () => {
  let store;

  beforeEach(() => {
    const api = {
      loadRestaurants: () => new Promise(() => {}),
    };

    const initialState = {loadError: true};

    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk.withExtraArgument(api)),
    );

    store.dispatch(loadRestaurants());
  });

  it('sets a loading flag', () => {
    expect(store.getState().loading).toEqual(true);
  });

  it('clears the error flag', () => {
    expect(store.getState().loadError).toEqual(false);
  });
});

describe('initially', () => {
  let store;

  beforeEach(() => {
    const initialState = {};

    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  });

  it('does not have the loading flag set', () => {
    expect(store.getState().loading).toEqual(false);
  });
  it('does not have the error flag set', () => {
    expect(store.getState().loadError).toEqual(false);
  });
});

describe('when loading fails', () => {
  let store;

  beforeEach(() => {
    const api = {
      loadRestaurants: () => Promise.reject(),
    };

    const initialState = {};

    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk.withExtraArgument(api)),
    );

    return store.dispatch(loadRestaurants());
  });

  it('sets an error flag', () => {
    expect(store.getState().loadError).toEqual(true);
  });

  it('clears the loading flag', () => {
    expect(store.getState().loading).toEqual(false);
  });
});
