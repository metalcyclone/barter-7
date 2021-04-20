import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ThingDonateScreen from '../screens/ThingDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
 ThingDonateList : {
    screen : ThingDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'ThingDonateList'
  }
);
