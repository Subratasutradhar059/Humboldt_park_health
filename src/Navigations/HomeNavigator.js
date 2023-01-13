import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../Constants/RouteNames';
import Contacts from '../Screens/Contacts';
import ContactDetails from '../Screens/ContactDetails';
import CreateContacts from '../Screens/CreateContacts';
import Settings from '../Screens/Settings';


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
  return (
    
      <HomeStack.Navigator initialRouteName="Home">
       {/* <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
       <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}/>
       <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts}/>
       <HomeStack.Screen name={SETTINGS} component={Settings}/>       */}
      </HomeStack.Navigator>
    
  );
};

export default HomeNavigator;
