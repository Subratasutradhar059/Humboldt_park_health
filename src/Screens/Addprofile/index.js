import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  Text,
} from 'react-native';
import React, {Component, useState, useContext} from 'react';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AddProfile = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  
  const SignInSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed')
      .required('Mobile Number Is Required To Continue'),
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff',paddingHorizontal:20}}>
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
          {/* <StatusBar backgroundColor="#fff" /> */}

          <View
            style={{
              //   backgroundColor: '#D9D9D9',
              marginVertical: 40,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 30,
                // width: '50%',
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
            <View><Text>mnbbmb</Text></View>
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
              initialValues={{mobileNumber: ''}}
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
                <View style={{marginTop:30}}>
                  <View
                    style={[
                      styles.textInput,
                      {flexDirection: 'row', alignItems: 'center'},
                    ]}>

                        <View style={{width:38,height:38,borderWidth:1,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="person-outline"
                      color="#3d3d3d"
                      size={13}
                    />
                    </View>
                    <TextInput
                      style={{
                        color: '#3d3d3d',
                        fontWeight: '600',
                        fontSize: 16,
                      }}
                      placeholder="Phone Number"
                      placeholderTextColor={'#aeaeae'}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      maxLength={10}
                    />
                  </View>
                  {errors.mobileNumber && touched.mobileNumber && (
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                        paddingTop: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'red'}}>
                        {errors.mobileNumber}
                      </Text>
                    </View>
                  )}

                  <View
                    style={[
                      styles.textInput,
                      {flexDirection: 'row', alignItems: 'center'},
                    ]}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="person-outline"
                      color="#3d3d3d"
                      size={25}
                    />
                    <TextInput
                      style={{
                        color: '#3d3d3d',
                        fontWeight: '600',
                        fontSize: 16,
                      }}
                      placeholder="Phone Number"
                      placeholderTextColor={'#aeaeae'}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      maxLength={10}
                    />
                  </View>
                  {errors.mobileNumber && touched.mobileNumber && (
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                        paddingTop: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'red'}}>
                        {errors.mobileNumber}
                      </Text>
                    </View>
                  )}

                  <View
                    style={[
                      styles.textInput,
                      {flexDirection: 'row', alignItems: 'center'},
                    ]}>

                    <Ionicons
                      style={styles.searchIcon}
                      name="mail-outline"                    
                      color="#3d3d3d"
                      size={25}
                    />
                    <TextInput
                      style={{
                        color: '#3d3d3d',
                        fontWeight: '600',
                        fontSize: 16,
                      }}
                      placeholder="Phone Number"
                      placeholderTextColor={'#aeaeae'}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      maxLength={10}
                    />
                  </View>
                  {errors.mobileNumber && touched.mobileNumber && (
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                        paddingTop: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'red'}}>
                        {errors.mobileNumber}
                      </Text>
                    </View>
                  )}

                  <View
                    style={[
                      styles.textInput,
                      {flexDirection: 'row', alignItems: 'center'},
                    ]}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="call"
                      color="#3d3d3d"
                      size={25}
                    />
                    <TextInput
                      style={{
                        color: '#3d3d3d',
                        fontWeight: '600',
                        fontSize: 16,
                      }}
                      placeholder="Phone Number"
                      placeholderTextColor={'#aeaeae'}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      maxLength={10}
                    />
                  </View>
                  {errors.mobileNumber && touched.mobileNumber && (
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                        paddingTop: 10,
                      }}>
                      <Text style={{fontSize: 12, color: 'red'}}>
                        {errors.mobileNumber}
                      </Text>
                    </View>
                  )}

                 
                  <GlobalButton
                    title={'Sign Up '}
                    inlineStyle={{margin: 20,}}
                    onPress={() => handleSubmit()}
                  />

               
                </View>
              )}
            </Formik>

          
          
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 15,
    color: '#000',
    padding: 7,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  appLogoStyle: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    resizeMode: 'contain',
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
