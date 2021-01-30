import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import * as Views from '~/screens';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.ModalPresentationIOS,
      cardStyle: {
        backgroundColor: '#111115',
      },
    }}
  >
    <App.Screen name="Home" component={Views.Home} />
  </App.Navigator>
);

export default AppRoutes;
