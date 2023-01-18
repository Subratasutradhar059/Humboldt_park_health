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
import Feather from 'react-native-vector-icons/Feather';

const DirectoryDoctor = ({navigation}) => {
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
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.ScreenBackground}}>
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
              title="Orthopaedics"
            />
          </View>

          {/* 
          <View
            style={{
              backgroundColor: Theme.primary,
              width: '100%',
              height: 55,
            }}>
            <Text
              Bold
              style={{
                marginHorizontal: 10,
                marginTop: 15,
                fontWeight: '600',
                color: '#fff',
              }}>
              You are not verified !{' '}
            </Text>
          </View> */}

          <View
            style={{
              backgroundColor: Theme.primary,
              // width: '100%',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={[
                styles.textInput,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="account-search-outline"
                color={Theme.gray}
                size={30}
              />
              <TextInput
                style={styles.InputStyle}
                placeholder="Search"
                placeholderTextColor={Theme.lightgray}
                keyboardType="phone-pad"
                // onChangeText={handleChange('mobileNumber')}
                // onBlur={handleBlur('mobileNumber')}
                // value={"hgdhgf"}
                maxLength={10}
              />
            </View>
          </View>

          <View styles={{}}>
            <FlatList
              data={AllReferrals}
              style={{marginBottom: 60}}
              // showsVerticalScrollIndicator={false}
              // keyExtractor={({ item, numbers }) => numbers}
              scrollIndicatorColor={'red'}
              ListEmptyComponent={
                <View style={{flex: 1, alignItems: 'center', marginTop: 80}}>
                  <Image
                    source={require('../../Assets/Images/WatingImage.png')}
                    style={styles.WaitingImage}
                    resizeMode="contain"
                  />
                  <Text style={{color: Theme.gray, fontWeight: '600'}}>
                    Your account is not verified yet..
                  </Text>
                </View>
              }
              renderItem={({item, numbers}) => {
                // console.log("item", item)
                return (
                  <TouchableOpacity
                    style={[
                      styles.ListStyle,
                      {
                        backgroundColor:
                          selected === item.id ? Theme.primary : '#fff',
                      },
                    ]}
                    onPress={() => {
                      navigation.navigate('DirectoryDoctorProfile', {
                        data: item,
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
                              color: selected === item.id ? '#fff' : '#3F3F3F',
                            },
                          ]}>
                          Dr {item.Doctor_Name}
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
                                color:
                                  selected === item.id ? '#fff' : '#3F3F3F',
                              },
                            ]}>
                            {item.Doctor_Spe}
                          </Text>
                        </View>

                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View
                            style={{
                              width: 13,
                              height: 13,
                              backgroundColor:
                                selected === item.id ? '#fff' : Theme.secondary,
                              borderRadius: 100,
                            }}
                          />
                          <Text
                            style={[
                              styles.Doctorspecialily,
                              {
                                color:
                                  selected === item.id ? '#fff' : '#3F3F3F',
                              },
                            ]}>
                             Dr {item.Doctor_Name}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Feather
                          name="chevron-right"
                          color={
                            selected === item.id ? '#fff' : Theme.RightIcon
                          }
                          size={30}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
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
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
    lineHeight: 19,
  },
  Doctorspecialily: {
    paddingHorizontal: 8,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Raleway-Regular',
    lineHeight: 19,
  },
  textInput: {
    backgroundColor: Theme.white,
    // marginTop: 30,
    color: Theme.black,
    padding: 7,
    // width: '100%',
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
    marginHorizontal: 10,
  },
  searchIcon: {
    paddingHorizontal: 7,
    opacity: 0.5,
  },
  InputStyle: {
    color: Theme.gray,
    fontWeight: '600',
    fontSize: 16,
    width: '85%',
    fontFamily: 'OpenSans-Regular',
  },
});

export default DirectoryDoctor;

{
  /*  */
}
