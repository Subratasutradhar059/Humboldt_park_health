import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import Otp from '../Screens/Otp';
import Addprofile from '../Screens/Addprofile';
import Wellcomepage from '../Screens/Wellcomepage';




const AuthNavigator = () => {
    const AuthStack = createStackNavigator()
  return (
    
      <AuthStack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
       <AuthStack.Screen name="Signin" component={Signin}/>
       <AuthStack.Screen name="Signup" component={Signup}/>             
       <AuthStack.Screen name="Otp" component={Otp}/>             
       <AuthStack.Screen name="Addprofile" component={Addprofile}/>             
       <AuthStack.Screen name="Wellcomepage" component={Wellcomepage}/>             
      </AuthStack.Navigator>
    
  );
};

export default AuthNavigator;
