import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar, Text, SafeAreaView} from 'react-native';
import AuthNavigator from './AuthNavigator';
// import HomeNavigator from './HomeNavigator';
// import DrawerNavigator from './DrawerNavigator';
// import {GlobalContext} from '../Context/Provider';

const AppNavContainer = () => {

  // const {
  //   authState: {isLoggedIn},
  // } = useContext(GlobalContext);


  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />} */}
       <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
