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
  ScrollView,
  Linking
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Components/common/Theme';
import Text from '../../Components/common/Text';
import NavigationHeaders from '../../Components/common/NavigationHeaders';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalButton from '../../Components/common/GlobalButton/GlobalButton';

const DirectoryDoctorProfile = ({navigation}) => {
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
          <ScrollView>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.DoctorName, ,]}>
                      Dr William A. Abdu
                    </Text>
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

            <View style={{marginHorizontal: 20}}>
              <GlobalButton
                title={'Refer to this doctor'}
                inlineStyle={{marginTop: 10, backgroundColor: Theme.secondary}}
                onPress={() => {
                  navigation.navigate('ReferToDoctor', {
                    // data: item,
                  });            
                }}
              />
            </View>

            <View style={{marginHorizontal: 20}}>
              <GlobalButton
                title={'Call now'}
                inlineStyle={{marginTop: 10, backgroundColor: Theme.secondary}}
                onPress={()=>{Linking.openURL('9898989898');}}
              />
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
                Clinical Interests
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
                Clinical Interests
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,

                    width: 250,
                    // marginTop: 15,
                    fontWeight: '800',
                    color: Theme.lightgray,
                  }}>
                  Loyola University Medical Center 2160 South 1st Avenue
                  Maywood, IL 60153
                </Text>

                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Ionicons
                    name="call"
                    color="#008EAA"
                    size={20}
                    style={{paddingRight: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 18,

                      width: 250,
                      // marginTop: 15,
                      fontWeight: '800',
                      color: Theme.lightgray,
                    }}>
                    88-584-7888
                  </Text>
                </View>
              </View>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  // paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    color={Theme.lightgray}
                    size={35}
                    style={{paddingRight: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 18,

                      width: 250,
                      // marginTop: 15,
                      fontWeight: '800',
                      color: Theme.lightgray,
                    }}>
                    Map{' '}
                  </Text>
                </View>
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
                Education & Credentials
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                College
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                St. John’s Medical College
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                Address
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                118 Bouleverd Saint-Germain
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                Number
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                9865454145
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                Email
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                admin@gmail.com
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                Number 2
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                9865454145
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '800',
                  color: Theme.lightgray,
                }}>
                Email 2
              </Text>
              <Text
                // Bold
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  // marginTop: 15,
                  fontWeight: '600',
                  color: Theme.lightgray,
                }}>
                admin099@gmail.com
              </Text>
            </View>
          </ScrollView>
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
    marginBottom: 5,
  },
});

export default DirectoryDoctorProfile;

{
  /*  */
}
