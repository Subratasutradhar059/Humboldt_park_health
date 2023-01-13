import 'react-native-gesture-handler';
import React from 'react';
// import { StatusBar } from 'react-native';
// import { Fonts } from './Src/Components/CustomText';
// import MainNav from './Src/Navigations/Route';
// import { Provider } from 'react-redux';
// import { mystore } from './Src/Redux/Store/Store';
import AppNavContainer from './src/Navigations';
import { Text, View } from 'react-native';

const App = ({navigation}) => {
  return (
    <>
      {/* <StatusBar backgroundColor={Fonts.colors.themeColor} /> */}
      <AppNavContainer />

      {/* <View> <Text>jhgdfjh</Text></View> */}
    </>
  );
};

export default App;
