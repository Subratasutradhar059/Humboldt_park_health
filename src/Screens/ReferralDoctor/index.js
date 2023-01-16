import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Components/common/Theme';
import Text from '../../Components/common/Text';
import NavigationHeaders from '../../Components/common/NavigationHeaders';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';

const ReferralDoctor = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState('');

  const AllReferrals = [
    {
      id: 1,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 2,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 3,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 4,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 5,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 6,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 7,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 8,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 9,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.white}}>
      {loader == true ? (
        <View style={styles.LoadarView}>
          <ActivityIndicator size={'large'} color={Theme.primary} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={Theme.white} />

          <View>
            <NavigationHeaders
              onPress={() => {
                navigation.goBack();
              }}
              title="Profile"
            />
          </View>
          <View
            style={[styles.ListStyle]}
            onPress={() => {
              navigation.navigate('ReferDoctor', {
                data: item,
              });
              setSelected(item.id);
            }}>
            <View style={{}}>
              <Image
                source={require('../../Assets/Images/referrals.png')}
                style={{width: 100, height: 100, borderRadius: 100}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '70%',
                marginHorizontal: 20,
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.DoctorName, ,]}>Dr William A. Abdu</Text>
                  <View style={{paddingHorizontal: 40}}>
                    <Entypo
                      name="star-outlined"
                      color={Theme.RightIcon}
                      size={25}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <Image
                    source={require('../../Assets/Images/specialilyIcon.png')}
                    style={{width: 12, height: 12}}
                  />
                  <Text style={[styles.Doctorspecialily]}>Orthopaedics </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 13,
                      height: 13,
                      backgroundColor: Theme.secondary,
                      borderRadius: 100,
                    }}
                  />
                  <Text style={[styles.Doctorspecialily]}>
                    Dr William A. Abdu
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal:20}}>
            <GlobalButton
              title={'Continue'}
              inlineStyle={{marginTop: 10}}
              // onPress={() => handleSubmit()}
            />
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
    // backgroundColor: Theme.white,
    margin: 20,
    // marginHorizontal: 25,
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
  },
});

export default ReferralDoctor;

{
  /*  */
}
