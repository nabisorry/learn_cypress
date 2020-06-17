import React from 'react';
import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    // List 컴포넌트를 랜더링한다.
    render(<RestaurantList loadRestaurants={loadRestaurants} />);
    // 랜더링할때 loadRestaurnats 함수가 호출된다
    expect(loadRestaurants).toHaveBeenCalled();
  });
});
