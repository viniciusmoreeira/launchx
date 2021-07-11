import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';

import * as Pages from '~/pages';

interface iIconsList {
  [key: string]: {
    iconName: string;
  };
}

const iconsList: iIconsList = {
  Home: {
    iconName: 'home',
  },
  Launches: {
    iconName: 'rocket',
  },
};

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      ...TransitionPresets.ModalPresentationIOS,
      tabBarIcon: ({ color, size }) => {
        const { iconName } = iconsList[route.name];

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#444444',
      tabBarStyle: {
        backgroundColor: '#111115',
        borderColor: '#111115',
        borderTopWidth: 0,
      },
    })}
  >
    <Tab.Screen name="Home" component={Pages.Home} />
    <Tab.Screen name="Launches" component={Pages.Launches} />
  </Tab.Navigator>
);

export default AppRoutes;
