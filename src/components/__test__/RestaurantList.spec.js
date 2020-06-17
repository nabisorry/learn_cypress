import React from 'react';
import {render} from '@testing-library/react';
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

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  it('loads restaurants on first render', () => {
    // 랜더링할때 loadRestaurnats 함수가 호출된다
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurnats', () => {
    const {queryByText} = context;

    // 전달된 텍스트를 포함하는 요소를 찾는다. 못찾으면 null 값을 반환
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
