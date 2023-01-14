import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../Screens/HomePage';



const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
  return (
    
      <HomeStack.Navigator initialRouteName="Homepage" screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Homepage" component={Homepage}/>
      </HomeStack.Navigator>
    
  );
};

export default HomeNavigator;
