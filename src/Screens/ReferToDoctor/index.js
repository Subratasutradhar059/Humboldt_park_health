import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Components/common/Theme';
import Text from '../../Components/common/Text';
import NavigationHeaders from '../../Components/common/NavigationHeaders';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';


const ReferToDoctor = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');

  const SignInSchema = Yup.object().shape({
    textMessage: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),

    firstName: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),

    lastName: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),

    mobileNumber: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),

    dob: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),
    reason: Yup.string()
      // .matches(phoneRegExp, 'Phone number is not valid'),
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed'),
    // .required('Mobile Number Is Required To Continue'),
  });






  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.ScreenBackground}}>
      {loader == true ? (
        <View style={styles.LoadarView}>
          <ActivityIndicator size={'large'} color={Theme.primary} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={Theme.white} />
          <ScrollView>
            <View>
              <NavigationHeaders
                onPress={() => {
                  navigation.goBack();
                }}
                title="Send Referral"
              />
            </View>

            <View
              style={{
                backgroundColor: Theme.primary,
                width: '100%',
                height: 40,

                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <Text
                Bold
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '500',
                  color: '#fff',
                }}>
                For the patient
              </Text>
            </View>

            <Formik
              validationSchema={SignInSchema}
              initialValues={{textMessage: '',firstName:'',lastName:'',mobileNumber:'',dob:'',reason:''}}
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
                <>
                  <View style={{paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Text a message"
                        placeholderTextColor={'#aeaeae'}
                        // keyboardType="phone-pad"
                        onChangeText={handleChange('textMessage')}
                        onBlur={handleBlur('textMessage')}
                        value={values.textMessage}
                        maxLength={10}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: Theme.primary,
                      width: '100%',
                      height: 40,
                      marginTop: 20,

                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      Bold
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        // marginTop: 15,
                        fontWeight: '500',
                        color: '#fff',
                      }}>
                      Attached doctor’s profile
                    </Text>
                  </View>

                  {/* Error Msg  */}

                  {/* Button */}

                  <TouchableOpacity
                    style={[
                      styles.ListStyle,
                      {
                        backgroundColor: '#fff',
                        marginTop: 20,
                      },
                    ]}
                    onPress={() => {
                      navigation.navigate('ReferralDoctor', {
                        // data: item,
                      });
                      // setSelected(item.id);
                    }}>
                    <View style={{paddingHorizontal: 15}}>
                      <Image
                        source={require('../../Assets/Images/referrals.png')}
                        style={{width: 70, height: 70, borderRadius: 100}}
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '70%',
                      }}>
                      <View>
                        <Text
                          style={[
                            styles.DoctorName,
                            {
                              color: '#3F3F3F',
                            },
                          ]}>
                          Dr William A. Abdu
                        </Text>

                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={require('../../Assets/Images/specialilyIcon.png')}
                            style={{width: 12, height: 12}}
                          />
                          <Text
                            style={[
                              styles.Doctorspecialily,
                              {
                                color: '#3F3F3F',
                              },
                            ]}>
                            Radiology, Cardiology
                          </Text>
                        </View>

                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View
                            style={{
                              width: 13,
                              height: 13,
                              backgroundColor: Theme.secondary,
                              borderRadius: 100,
                            }}
                          />
                          <Text
                            style={[
                              styles.Doctorspecialily,
                              {
                                color: '#3F3F3F',
                              },
                            ]}>
                            +91 9641323845
                          </Text>
                        </View>
                      </View>
                      <View style={{marginTop: -40}}>
                        <Feather
                          name="x-circle"
                          color={Theme.secondary}
                          size={20}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 5,
                    }}
                    onPress={() => {
                      navigation.navigate('Directory');
                    }}>
                    <View style={{paddingHorizontal: 10}}>
                      <Feather
                        name="plus-circle"
                        color={Theme.RightIcon}
                        size={20}
                      />
                    </View>

                    <Text style={{color: Theme.RightIcon, fontSize: 17}}>
                      Add another Doctor
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      backgroundColor: Theme.primary,
                      width: '100%',
                      height: 40,
                      marginTop: 10,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      Bold
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        // marginTop: 15,
                        fontWeight: '500',
                        color: '#fff',
                      }}>
                      Patient’s Information
                    </Text>
                  </View>

                  <View style={{paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="First Name "
                        placeholderTextColor={'#aeaeae'}
                      
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                        maxLength={10}
                      />
                    </View>
                  </View>
                  <View style={{paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Last Name "
                        placeholderTextColor={'#aeaeae'}
                    
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                        maxLength={10}
                      />
                    </View>
                  </View>
                  <View style={{paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
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
                  </View>
                  <View style={{paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Date of Birth"
                        placeholderTextColor={'#aeaeae'}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('dob')}
                        onBlur={handleBlur('dob')}
                        value={values.dob}
                        maxLength={10}
                      />
                    </View>
                  </View>

                  <View style={{paddingHorizontal: 15, marginBottom: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Reason for Visit/Referral"
                        placeholderTextColor={'#aeaeae'}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('reason')}
                        onBlur={handleBlur('reason')}
                        value={values.reason}
                        maxLength={10}
                      />
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
          <View style={{marginHorizontal: 15}}>
            <GlobalButton
              title={'Send'}
              inlineStyle={{margin: 20, marginTop: 5}}
              onPress={() => {
                setModalVisible(true);
              }}
              // onPress={() => navigation.navigate('Otp')}
            />
            <Modal transparent={true} visible={modalVisible}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
                style={{
                  backgroundColor: '#000000aa',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 15,
                    width: '90%',
                    height: '25%',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  {/* <View style={{ flexDirection: 'row', marginBottom: 15 }}> */}

                  <View style={{marginVertical: 20}}>
                    <Text style={{color: Theme.lightgray, fontWeight: '700'}}>
                      Send Referral ?
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop:11
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Homepage')
                      }}
                      style={{}}>
                      <View
                        style={[
                          {
                            backgroundColor:Theme.secondary,
                            justifyContent: 'space-between',
                            paddingHorizontal: 25,
                            paddingVertical: 15,
                            marginHorizontal: 20,
                            borderRadius: 10,
                            width:120,
                            height:55,
                            alignItems:"center"

                          },
                        ]}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{color: Theme.white, fontWeight: '700'}}>Yes</Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                       onPress={() => {
                        setModalVisible(false);
                      }}
                      style={{}}>
                      <View
                        style={[
                          {
                            backgroundColor: Theme.secondary,
                            justifyContent: 'space-between',
                            paddingHorizontal: 25,
                            paddingVertical: 15,
                            marginHorizontal: 20,
                            borderRadius: 10,
                            width:120,
                            height:55,alignItems:"center"
                          },
                        ]}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{color: Theme.white, fontWeight: '700'}}>No</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {/* </View> */}
                </View>
              </Pressable>
            </Modal>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LoadarView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  WaitingImage: {
    width: 350,
    height: 310,
  },
  ListStyle: {
    height: 90,
    backgroundColor: Theme.white,
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between"
  },
  DoctorName: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
    lineHeight: 19,
  },
  Doctorspecialily: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Raleway-Regular',
    lineHeight: 19,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: Theme.white,
    marginTop: 15,
    color: Theme.black,
    paddingHorizontal: 15,
    paddingVertical: 5,
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
  searchIcon: {
    paddingHorizontal: 7,
    opacity: 0.5,
  },
  InputStyle: {
    color: Theme.gray,
    fontWeight: '600',
    fontSize: 16,
    width: '80%',
    fontFamily: 'OpenSans-Regular',
  },
});

export default ReferToDoctor;

{
  /*  */
}
