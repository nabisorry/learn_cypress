import React from 'react';
import {render, queryByTestId} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

// 단위 테스트에서 하나의 테스트(it)당 하나씩만 테스트한다.
// 단 E2E는 속도가 느리기때문에  테스트에서는 하나의 테스트 에서 여러 테스트를 수행해야 한다.
describe('RestaurantList', () => {
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
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;
    context = render(<RestaurantList {...props} />);
  };

  it('loads restaurants on first render', () => {
    renderWithProps();
    // 랜더링할때 loadRestaurnats 함수가 호출된다
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurnats', () => {
    renderWithProps();
    // getBy, queryBy 차이점은 getBy는 일치하는 요소를 node에서 찾고 없으면 error를 반환
    // queryBy 는 null값을 반환한다. querBy로 해당요소가 없는경우 테스트 케이스를 작성하기에 적절해보인다.
    const {queryByText} = context;

    // 전달된 텍스트를 포함하는 요소를 찾는다. 못찾으면 null 값을 반환
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    const {queryByText} = context;
    expect(queryByTestId('loading-indicator')).not.toBeNull();
    // why test id? -> class 또는 id 는 개발 진행중에 이름이 변경이되면서 테스트 코드가 의도치 않게 실패할수
    // 있지만 test id 는 목적 자체가 test용이기 때문에 더 안정적이다.
  });
});
