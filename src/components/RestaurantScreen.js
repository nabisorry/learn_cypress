import React from 'react';
import RestaurantList from './RestaurantList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function RestaurantScreen() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Restaurants Place List</Typography>
        <RestaurantList />
      </CardContent>
    </Card>
  );
}

export default RestaurantScreen;
