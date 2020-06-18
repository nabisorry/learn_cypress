import React from 'react';
import {render, queryByTestId} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

// 목업 데이터 작성
const restaurants = [
  {id: 1, name: 'Sushi Place'},
  {id: 2, name: 'Pizza Place'},
];
let loadRestaurants;
let context;

const renderWithProps = (propOverrides = {}) => {
  const props = {
    loadRestaurants: jest.fn().mockName('loadRestaurants'),
    restaurants,
    loading: false,
    ...propOverrides,
  };
  loadRestaurants = props.loadRestaurants;
  context = render(<RestaurantList {...props} />);
};

// 단위 테스트에서 하나의 테스트(it)당 하나씩만 테스트한다.
// 단 E2E는 속도가 느리기때문에  테스트에서는 하나의 테스트 에서 여러 테스트를 수행해야 한다.
describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    renderWithProps();
    // 랜더링할때 loadRestaurnats 함수가 호출된다
    expect(loadRestaurants).toHaveBeenCalled();
  });
});

// 로딩중일때 로딩바 확인
describe('while loading', () => {
  // 로딩
  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).not.toBeNull();
  });
});

// 로딩 성공했을때
describe('when loading succeeds', () => {
  beforeEach(() => {
    renderWithProps();
  });

  it('dose not display the loading indicator while not loading', () => {
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).toBeNull();
  });

  it('displays the restaurants', () => {
    const {queryByText} = context;
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });

  it('dose not display the error message', () => {
    const {queryByText} = context;
    expect(queryByText('Restaurants could not be loaded')).toBeNull();
  });

  // 로딩이 실패했을때
  describe('when loading fails', () => {
    beforeEach(() => {
      renderWithProps({loadError: true});
    });

    it('display the error message', () => {
      const {queryByText} = context;
      expect(queryByText('Restaurants could not be loaded')).not.toBeNull();
    });
  });
});
