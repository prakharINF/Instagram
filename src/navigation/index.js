import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BOTTOM_TAB_STACK,
  CHATS,
  NOTIFICATIONS,
  PERSON_CHAT,
} from './screenNames';
import BottomTabStack from './navigators/BottomTabNavigator';
import Chats from '../features/chats';
import Notifications from '../features/notifications';
import {SafeAreaView} from 'react-native';
import PersonChat from '@app/features/chats/features/person_chat';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={BOTTOM_TAB_STACK} component={BottomTabStack} />
        <Stack.Screen name={PERSON_CHAT} component={PersonChat} />
        <Stack.Group screenOptions={{animation: 'slide_from_right'}}>
          <Stack.Screen name={CHATS} component={Chats} />
          <Stack.Screen name={NOTIFICATIONS} component={Notifications} />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootStack;
