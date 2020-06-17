import React from 'react';
import axios from 'axios';

const App = () => {
  axios
    .get(
      'https://api.outsidein.dev/2GNCwU49pmiNCHNA3b79bcKdGcFayUya/restaurants',
    )
    .then(res => console.log(res.data));

  return <div>Hello, world.</div>;
};

export default App;
