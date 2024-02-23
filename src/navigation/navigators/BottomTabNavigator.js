import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_CONFIG} from '../../configs';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          height: 55,
        },
      }}>
      {BOTTOM_TAB_CONFIG.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.screen}
          options={{
            tabBarIcon: () => (
              <Image
                style={[
                  {height: 24, width: 24},
                  tab.name === 'Profile' && {borderRadius: 12},
                  tab.name !== 'Profile' && {tintColor: '#fff'},
                ]}
                source={tab.icon}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;
