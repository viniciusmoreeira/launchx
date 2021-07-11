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

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        ...TransitionPresets.ModalPresentationIOS,
        tabBarIcon: ({ color, size }) => {
          const { iconName } = iconsList[route.name];

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#606B81',
        tabBarStyle: {
          backgroundColor: '#1B1D28',
          borderRadius: 10,
          borderTopWidth: 0,
          position: 'absolute',
          height: 60,
          bottom: 30,
          left: 20,
          right: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={Pages.Home} />
      <Tab.Screen name="Launches" component={Pages.Launches} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
