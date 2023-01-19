import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNav from './TabNav';
import ReferralDoctor from '../Screens/ReferralDoctor';
import DirectoryDoctor from '../Screens/DirectoryDoctor';
import DirectoryDoctorProfile from '../Screens/DirectoryDoctorProfile';
import ReferToDoctor from '../Screens/ReferToDoctor';
import EditProfile from '../Screens/EditProfile';




const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
  return (
    
      <HomeStack.Navigator initialRouteName='TabNav' screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="TabNav" component={TabNav}/>
      <HomeStack.Screen name="ReferralDoctor" component={ReferralDoctor}/>
      <HomeStack.Screen name="DirectoryDoctor" component={DirectoryDoctor}/>
      <HomeStack.Screen name="DirectoryDoctorProfile" component={DirectoryDoctorProfile}/>
      <HomeStack.Screen name="ReferToDoctor" component={ReferToDoctor}/>
      <HomeStack.Screen name="EditProfile" component={EditProfile}/>
      
      </HomeStack.Navigator>
    
  );
};

export default HomeNavigator;
