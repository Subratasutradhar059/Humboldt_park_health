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
import NavigationHeaders from '../../Components/common/NavigationHeaders';

const Account = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  const [checked, setChecked] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.white}}>
      {loader == true ? (
        <View style={styles.LoadarView}>
          <ActivityIndicator size={'large'} color={Theme.white} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={Theme.white} />

          {/* <View>
            <NavigationHeaders
              onPress={() => {
                navigation.goBack();
              }}
              title="Bookings"
            />
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Image
              source={require('../../Assets/Images/AppLogo.png')}
              style={styles.appLogoStyle}
              resizeMode="contain"
            />
            <Text
              style={{
                color: '#008EAA',
                fontSize: 16,
                fontWeight: '700',
                marginLeft: -90,
              }}>
              Account
            </Text>
            <View>
              <Text></Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Theme.primary,
              width: '100%',
              height: 40,
              marginTop: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
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
              Edit
            </Text>
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
              Dr William A. Abdu
            </Text>
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
              MY CONTACT INFORMATION
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>

          <View
            style={{
              backgroundColor: Theme.primary,
              width: '100%',
              height: 40,
              // marginTop: 10,
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
              MY SETTINGS
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,

                // marginTop: 15,
                fontWeight: '800',
                color: Theme.lightgray,
              }}>
              Cardiac
            </Text>
            <Text
              // Bold
              style={{
                fontSize: 18,
                // paddingVertical: 10,
                // marginTop: 15,
                fontWeight: '600',
                color: Theme.lightgray,
              }}>
              Imaging
            </Text>
          </View>
        </>
      )}
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
});

export default Account;

{
  /*  */
}
