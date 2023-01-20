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
} from 'react-native';
import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';
import Theme from '../../Components/common/Theme';

import Text from '../../Components/common/Text';
import NavigationHeaders from '../../Components/common/NavigationHeaders';

const EditProfile = ({navigation, route}) => {
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(true);

  const SignInSchema = Yup.object().shape({
    firstname: Yup.string().required('First name Is Required To Continue'),
    lastname: Yup.string().required('Last Name Is Required To Continue'),
    email: Yup.string().required('Email Id Is Required To Continue'),
    phone: Yup.string()
      .min(10, 'min 10 digit is require ')
      .max(10, 'max 10 digit allowed')
      .required('Mobile Number Is Required To Continue'),
    city: Yup.string().required('City Is Required To Continue'),
    state: Yup.string().required('state Is Required To Continue'),
    zipcode: Yup.string().required('Zipcode  Is Required To Continue'),
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.white}}>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          phone2: '',
          city: '',
          state: '',
          zipcode: '',
          emailoptional: '',
        }}
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
            <ScrollView>
              {loader == true ? (
                <View style={styles.LoadarView}>
                  <ActivityIndicator size={'large'} color={Theme.white} />
                </View>
              ) : (
                <>
                  <StatusBar backgroundColor={Theme.white} />

                  <View>
                    <NavigationHeaders
                      onPress={() => {
                        navigation.goBack();
                      }}
                      title="Account"
                    />
                  </View>

                  <View
                    style={{
                      // backgroundColor: 'red',
                      marginVertical: 40,
                      // width: '100%',
                      // width: 150,
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      alignSelf: 'center',
                    }}>
                    <Image
                      source={require('../../Assets/Images/referrals.png')}
                      style={[styles.ProfileImage]}
                    />

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
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        paddingHorizontal: 20,
                        // paddingVertical: 10,
                        // marginTop: 15,
                        fontSize: 20,
                        fontWeight: '700',
                        color: Theme.lightgray,
                      }}>
                      Edit profile
                    </Text>
                  </View>

                  <View style={{marginTop: 30, paddingHorizontal: 15}}>
                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="person-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                        style={styles.textinputstyle}
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
                        style={styles.errorstyle}>
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
                       style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="person-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                        style={styles.textinputstyle}
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
                      style={styles.errorstyle}>
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
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                       style={styles.textinputstyle}
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
                      style={styles.errorstyle}>
                        <Text style={{fontSize: 12, color: 'red'}}>
                          {errors.email}
                        </Text>
                      </View>
                    )}

                    <View
                      style={{
                        backgroundColor: Theme.primary,
                        width: '100%',
                        height: 40,
                        // marginTop: 10,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginBottom: 10,
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
                        Education & Credentials
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                       style={styles.textinputstyle}
                        placeholder="Phone Number"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        maxLength={10}
                      />
                    </View>

                    {errors.phone && touched.phone && (
                      <View
                      style={styles.errorstyle}>
                        <Text style={{fontSize: 12, color: 'red'}}>
                          {errors.phone}
                        </Text>
                      </View>
                    )}

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                        style={styles.textinputstyle}
                        placeholder="Phone Number 2 (Optional)"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('phone2')}
                        onBlur={handleBlur('phone2')}
                        value={values.phone2}
                        maxLength={10}
                      />
                    </View>

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                       style={styles.textinputstyle}
                        placeholder="City"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                        maxLength={10}
                      />
                    </View>

                    {errors.city && touched.city && (
                      <View
                      style={styles.errorstyle}>
                        <Text style={{fontSize: 12, color: 'red'}}>
                          {errors.city}
                        </Text>
                      </View>
                    )}

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                        style={styles.textinputstyle}
                        placeholder="State"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        value={values.state}
                        maxLength={10}
                      />
                    </View>

                    {errors.state && touched.state && (
                      <View
                      style={styles.errorstyle}>
                        <Text style={{fontSize: 12, color: 'red'}}>
                          {errors.state}
                        </Text>
                      </View>
                    )}

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                        style={styles.textinputstyle}
                        placeholder="Zip Code"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('zipcode')}
                        onBlur={handleBlur('zipcode')}
                        value={values.zipcode}
                        maxLength={10}
                      />
                    </View>

                    {errors.zipcode && touched.zipcode && (
                      <View
                      style={styles.errorstyle}>
                        <Text style={{fontSize: 12, color: 'red'}}>
                          {errors.zipcode}
                        </Text>
                      </View>
                    )}

                    <View
                      style={[
                        styles.textInput,
                        {flexDirection: 'row', alignItems: 'center'},
                      ]}>
                      <View
                        style={styles.textinputIcon}>
                        <Ionicons
                          style={styles.searchIcon}
                          name="mail-outline"
                          color={Theme.lightgray}
                          size={13}
                        />
                      </View>
                      <TextInput
                       style={styles.textinputstyle}
                        placeholder="Email (Optional)"
                        placeholderTextColor={Theme.lightgray}
                        keyboardType="phone-pad"
                        onChangeText={handleChange('emailoptional')}
                        onBlur={handleBlur('emailoptional')}
                        value={values.emailoptional}
                        maxLength={10}
                      />
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
            <View style={{marginHorizontal: 20}}>
              <GlobalButton
                title={'Sign In '}
                inlineStyle={{margin: 20}}
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appLogoStyle: {
    width: 100,
    height: 30,
    // backgroundColor:"red"
  },
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
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'relative',
    borderRadius: 100,
  },
  iconStyle: {
    width: 12,
    height: 12,
    alignSelf: 'center',
    // resizeMode: 'contain',
    position: 'relative',
  },
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
  iconStyle: {
    width: 12,
    height: 12,
    alignSelf: 'center',
    // resizeMode: 'contain',
    position: 'relative',
  },
  errorstyle:{
    width: '97%',
    alignSelf: 'center',
    paddingBottom:10,
  },
  textinputIcon:{
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Theme.lightgray,
    marginHorizontal: 7,
  },
  textinputstyle:{
    color: Theme.lightgray,
    fontWeight: '600',
    fontSize: 16,
  }
});

export default EditProfile;

{
  /*  */
}
