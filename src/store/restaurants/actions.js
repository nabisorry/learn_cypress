export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const START_LOADING = 'START_LOADING';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
const startLoading = () => ({type: START_LOADING});

export const loadRestaurants = () => (dispatch, getState, api) => {
  // thunk 를 사용해서 loading 디스패치 하기
  dispatch(startLoading());
  api
    .loadRestaurants()
    .then(records => {
      dispatch(storeRestaurants(records));
    })
    .catch(() => dispatch(recordLoadingError()));
};

const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});

const recordLoadingError = () => ({type: RECORD_LOADING_ERROR});
