import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  Text,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../Components/common/Theme';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const AddProfile = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  const SignInSchema = Yup.object().shape({
    firstname: Yup.string().required('First name Is Required To Continue'),
    lastname: Yup.string().required('Last Name Is Required To Continue'),
    email: Yup.string().required('Email Id Is Required To Continue'),
  });

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
          {/* <KeyboardAvoidingScrollView > */}

          
         
          <View
            style={{
              // backgroundColor: 'red',
              marginVertical: 40,
              // width: '100%',
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              alignSelf: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 30,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../Assets/Images/profile.png')}
                style={styles.appLogoStyle}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 20,
                backgroundColor: Theme.secondary,
                padding: 6,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              
              <Image
                source={require('../../Assets/Images/editicon.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* SignIn Text */}

          {/* <Text
              style={{
                textAlign: 'center',
                marginTop: 40,
                color: '#fff',
                fontSize: 40,
                fontWeight: '700',
              }}>
              Sign Up
            </Text> */}

          {/* Input */}
          <Formik
            validationSchema={SignInSchema}
            initialValues={{firstname: '', lastname: '', email: ''}}
            onSubmit={values => {
              handleLogin(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View style={{marginTop: 30}}>
                <View
                  style={[
                    styles.textInput,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                      borderRadius: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: Theme.lightgray,
                      marginHorizontal: 7,
                    }}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="person-outline"
                      color={Theme.lightgray}
                      size={13}
                    />
                  </View>
                  <TextInput
                    style={{
                      color: Theme.lightgray,
                      fontWeight: '600',
                      fontSize: 16,
                    }}
                    placeholder="First Name"
                    placeholderTextColor={Theme.lightgray}
                    keyboardType="phone-pad"
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    value={values.firstname}
                    maxLength={10}
                  />
                </View>
                {errors.firstname && touched.firstname && (
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      paddingTop: 10,
                    }}>
                    <Text style={{fontSize: 12, color: 'red'}}>
                      {errors.firstname}
                    </Text>
                  </View>
                )}

                <View
                  style={[
                    styles.textInput,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                      borderRadius: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: Theme.lightgray,
                      marginHorizontal: 7,
                    }}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="person-outline"
                      color={Theme.lightgray}
                      size={13}
                    />
                  </View>
                  <TextInput
                    style={{
                      color: Theme.lightgray,
                      fontWeight: '600',
                      fontSize: 16,
                    }}
                    placeholder="Last Name"
                    placeholderTextColor={Theme.lightgray}
                    keyboardType="phone-pad"
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                    maxLength={10}
                  />
                </View>
                {errors.lastname && touched.lastname && (
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      paddingTop: 10,
                    }}>
                    <Text style={{fontSize: 12, color: 'red'}}>
                      {errors.lastname}
                    </Text>
                  </View>
                )}

                <View
                  style={[
                    styles.textInput,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                      borderRadius: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: Theme.lightgray,
                      marginHorizontal: 7,
                    }}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="mail-outline"
                      color={Theme.lightgray}
                      size={13}
                    />
                  </View>
                  <TextInput
                    style={{
                      color: Theme.lightgray,
                      fontWeight: '600',
                      fontSize: 16,
                    }}
                    placeholder="Email"
                    placeholderTextColor={Theme.lightgray}
                    keyboardType="phone-pad"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    maxLength={10}
                  />
                </View>
                {errors.email && touched.email && (
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      paddingTop: 10,
                    }}>
                    <Text style={{fontSize: 12, color: 'red'}}>
                      {errors.email}
                    </Text>
                  </View>
                )}

                <GlobalButton
                  title={'Continue '}
                  inlineStyle={{margin: 20}}
                  // onPress={() => handleSubmit()}
                  onPress={() => navigation.navigate("Wellcomepage")}
                />
              </View>
            )}
          </Formik>
          {/* </KeyboardAvoidingScrollView> */}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Theme.white,
    marginBottom: 15,
    padding: 7,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: Theme.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  appLogoStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'relative',
  },
  iconStyle: {
    width: 12,
    height: 12,
    alignSelf: 'center',
    // resizeMode: 'contain',
    position: 'relative',
    
  },

  searchIcon: {
    // paddingHorizontal: 7,
    // opacity: 0.5,
  },
});

export default AddProfile;

{
  /*  */
}
