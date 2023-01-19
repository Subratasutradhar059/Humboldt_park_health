import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import GlobalButton from '../../../Components/common/GlobalButton/GlobalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../../Components/common/Theme';
import Text from '../../../Components/common/Text';

const Wellcomepage = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      {loader == true ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator size={'large'} color="#fff" />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor="#fff" />

          <Image
            source={require('../../../Assets/Images/AppLogo.png')}
            style={styles.appLogoStyle}
            resizeMode="contain"
          />
          <Image
            source={require('../../../Assets/Images/wellcomeimage.png')}
            style={styles.imageStyle}
            resizeMode="contain"
          />

          <View style={styles.textView}>
            <Text style={styles.WellcomeText}>Welcome !</Text>
            <Text style={styles.Paragraph}>
              We are happy to have you onboard.
            </Text>
          </View>

          <GlobalButton
            title={'Continue '}
            inlineStyle={styles.Button}
            onPress={() =>navigation.navigate('Homepage') }
            
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appLogoStyle: {
    width: 260,
    height: 200,
    alignSelf: 'center',

    // top: 10,
  },
  imageStyle: {
    width: 300,
    height: 200,
    alignSelf: 'center',

    top: 20,
  },

  WellcomeText: {
    fontSize: 29,
    color: Theme.secondary,
    fontWeight: '800',
    textAlign: 'center',
  },
  Paragraph: {
    fontSize: 14,
    color: Theme.secondary,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  textView: {
    marginTop: 120,
  },
  Button: {
    marginTop: 30,
   
  },
});

export default Wellcomepage;

{
  /*  */
}
