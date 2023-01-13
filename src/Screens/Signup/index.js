import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';
import Theme from '../../Components/common/Theme';
import {Fonts} from '../../Components/common/CustomText';
import Text from '../../Components/common/Text';

const Signup = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  
  const [checked, setChecked] = useState(true);

  const SignInSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed')
      .required('Mobile Number Is Required To Continue'),
  });

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme.white, paddingHorizontal: 20}}>
      {loader == true ? (
        <View style={styles.LoadarView}>
          <ActivityIndicator size={'large'} color={Theme.white} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={Theme.white} />
          <Image
            source={require('../../Assets/Images/AppLogo.png')}
            style={styles.appLogoStyle}
            resizeMode="contain"
          />
          {/* SignUp Text */}
          <View style={styles.bluebackground}>
            <Text style={[styles.HeadingText, Fonts.HeadingBold]}>Sign Up</Text>

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
                <View style={{paddingHorizontal: 20}}>
                  <View
                    style={[
                      styles.textInput,
                      {flexDirection: 'row', alignItems: 'center'},
                    ]}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="call"
                      color={Theme.gray}
                      size={25}
                    />
                    <TextInput
                      style={styles.InputStyle}
                      placeholder="Phone Number"
                      placeholderTextColor={'#aeaeae'}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      maxLength={10}
                    />
                  </View>

                  {/* Error Msg  */}
                  {errors.mobileNumber && touched.mobileNumber && (
                    <View style={styles.errorView}>
                      <Text style={{fontSize: 12, color: 'red'}}>
                        {errors.mobileNumber}
                      </Text>
                    </View>
                  )}

                  <View style={styles.CheckBoxView}>
                    {/* CheckBok */}
                    <Checkbox
                      style={{paddingHorizontal: 10, color: Theme.white}}
                      status={checked ? 'checked' : 'unchecked'}
                      color={Theme.white}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                    <Text style={{fontSize: 15, color: Theme.white}}>
                      <Text style={{color: Theme.white}}>
                        Are you a physician ?
                      </Text>
                    </Text>
                  </View>

                  {/* Button */}

                  <GlobalButton
                    title={'Sign Up '}
                    inlineStyle={{margin: 20, marginTop: 5}}
                    onPress={() => navigation.navigate('Otp')}
                  />
                </View>
              )}
            </Formik>
        
            <Text
              style={{
                textAlign: 'center',               
                color: Theme.white,
                fontSize: 15,
              }}>
              We will send OTP for verification.
            </Text>

            <View style={styles.BottomPart}>
              <Text style={styles.bottomContent}>
                Allready have an account ?
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signin');
                }}>
                <Text style={{color: Theme.primary}}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Theme.white,
    marginTop: 30,
    color: Theme.black,
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
    width: 260,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'relative',
    top: 70,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  searchIcon: {
    paddingHorizontal: 7,
    opacity: 0.5,
  },
  BottomPart: {
    flexDirection: 'row',
    marginTop: 100,
    marginVertical: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  LoadarView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  bluebackground: {
    backgroundColor: Theme.secondary,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    resizeMode: 'cover',
  },
  HeadingText: {
    textAlign: 'center',
    marginTop: 40,
  },
  InputStyle: {
    color: Theme.gray,
    fontWeight: '600',
    fontSize: 16,
    width: '80%',
    fontFamily: 'OpenSans-Regular',
  },
  CheckBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  errorView: {
    width: '99%',
    alignSelf: 'center',
    paddingTop: 10,
  },
});

export default Signup;

{
  /*  */
}
