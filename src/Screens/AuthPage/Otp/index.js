import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  Button,
  Alert
} from 'react-native';
import React, {Component, useState, useContext} from 'react';
import GlobalButton from '../../../Components/common/GlobalButton/GlobalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../../Components/common/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Otp = ({navigation,route}) => {
  const [loader, setLoader] = useState(false);
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const [thirdDigit, setThirdDigit] = useState('');
  const [forthDigit, setForthDigit] = useState('');

  const otpValidation = () => {
    if (firstDigit == '') {
      alert('enter first number');
    } else if (secondDigit == '') {
      alert('enter second number');
    } else if (thirdDigit == '') {
      alert('enter third number');
    } else if (forthDigit == '') {
      alert('enter fourth number');
    }
  };
  let checked = route?.params?.checked;
  console.log("kjgjhgjh",checked)

  const VerifyOtp = () => {
    if (firstDigit && secondDigit && thirdDigit && forthDigit) {

    
      navigation.navigate('Addprofile',{checked:checked});
    }

    // console.log('user_Details', data);
    // // setLoader(true);
    // let Payload = {
    //   mobile_number: data?.mobile_number,
    //   user_otp: firstDigit + secondDigit + thirdDigit + forthDigit,
    // };
    // // console.log('OTP Data', data);

    // PostMethode('auths/verify_otp', Payload)
    //   .then(Response => {
    //     console.log('otp Response', Response);
    //     if (Response.status === 'success') {
    //       authContext.signIn({
    //         data: Response.data.rows[0],
    //       });

    //       //  navigation.navigate('HomeScreen');
    //     } else {
    //       console.log('Response.message', Response.data.message);
    //       // Alert.alert(Response.data.message);
    //     }
    //     // if (Response.status === 'success') {
    //     //   authContext.signIn({
    //     //     data: Response.data.rows[0],
    //     //   });
    //     //   navigation.navigate('HomeScreen');
    //     // } else {
    //     //   console.log('Response.message', Response.data.message);
    //     //   alert(Response.message);
    //     // }
    //   })

    //   .catch(error => {
    //     setLoader(false);
    //     alert(error);
    //     console.log('error2', error);
    //   });
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme.white, paddingHorizontal: 20}}>
      {loader == true ? (
        <View style={styles.LoaderView}>
          <ActivityIndicator size={'large'} color={Theme.white} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={Theme.white} />

          {/* Logo */}

          <Image
            source={require('../../../Assets/Images/AppLogo.png')}
            style={styles.appLogoStyle}
            resizeMode="contain"
          />

          {/* Background View */}

          <View style={styles.BlueBackground}>
            {/* <KeyboardAwareScrollView> */}
            {/* Input */}

            <View style={{paddingHorizontal: 20}}>
              <View style={styles.inputContainer}>
                <TextInput
                  maxLength={1}
                  selectionColor={Theme.primary}
                  value={firstDigit}
                  style={styles.textInput}
                  onChangeText={num => {
                    setFirstDigit(num);
                    secondTextInput.focus();
                  }}
                  keyboardType="numeric"
                />

                <TextInput
                  maxLength={1}
                  selectionColor={Theme.primary}
                  value={secondDigit}
                  style={styles.textInput}
                  ref={input => {
                    secondTextInput = input;
                  }}
                  onChangeText={text => {
                    setSecondDigit(text);
                    thirdTextinput.focus();
                  }}
                  keyboardType="numeric"
                />

                <TextInput
                  maxLength={1}
                  selectionColor={Theme.primary}
                  value={thirdDigit}
                  style={styles.textInput}
                  ref={input => {
                    thirdTextinput = input;
                  }}
                  onChangeText={text => {
                    setThirdDigit(text);
                    fourthTextinput.focus();
                  }}
                  keyboardType="numeric"
                />

                <TextInput
                  maxLength={1}
                  selectionColor={Theme.primary}
                  value={forthDigit}
                  style={styles.textInput}
                  ref={input => {
                    fourthTextinput = input;
                  }}
                  onChangeText={text => {
                    setForthDigit(text);
                    // moveTo();
                  }}
                  keyboardType="numeric"
                />
              </View>

              <GlobalButton
                title={'Continue'}
                inlineStyle={styles.buttonStyle}
                onPress={() => VerifyOtp()}
              />
            </View>
            {/* </KeyboardAwareScrollView> */}

            <Text style={styles.EnterOtp}>Enter the OTP to sign in</Text>

            <View style={styles.BottomPart}>
              <Text style={styles.bottomContent}>
                {' '}
                Didn’t receive the OTP code
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <Text style={[{}, styles.bottomContent2]}> Resend</Text>
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
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 12,
    width: '15%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    color: '#a5a5a5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.34,
    shadowRadius: 7.27,
    elevation: 10,
  },
  mobileNumberWrapStyle: {
    backgroundColor: '#fff',
    elevation: 2.0,
    borderRadius: 40,
    marginHorizontal: 20,
    height: 55.0,
    marginBottom: 20,
    borderColor: 'rgba(128,128,128,0.12)',
  },
  loginWithGoogleButtonStyle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#3B5998',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  continueButtonStyle: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 20,
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 25,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  appLogoStyle: {
    width: 260,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',

    top: 70,
  },
  Button: {
    marginHorizontal: 20,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    paddingHorizontal: 7,
    opacity: 0.5,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  BlueBackground: {
    backgroundColor: '#008EAA',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  LoaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonStyle: {
    margin: 20,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.34,
    shadowRadius: 7.27,
    elevation: 10,
  },
  EnterOtp: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
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
  bottomContent2: {
    color: Theme.primary,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
});

export default Otp;

{
  /*  */
}
