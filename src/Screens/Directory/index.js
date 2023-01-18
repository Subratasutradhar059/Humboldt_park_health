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

const Directory = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState('');

  const AllReferrals = [

    






    {
      id: 1,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Anesthesiology',
    },
    {
      id: 2,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Burn Center',
    },
    {
      id: 3,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Cardiology',
    },
    {
      id: 4,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Cardiothoracic Sergery',
    },
    {
      id: 5,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Critical Care Medicine',
    },
    {
      id: 6,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Dentisty',
    },
    {
      id: 7,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Emergency Medicine',
    },
    {
      id: 8,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Endocrinology',
    },
    {
      id: 9,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Orthopaedics',
    },
    {
      id: 10,
      Doctor_Name: 'William A. Abdu',
      Doctor_Spe: 'Diabetes',
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
              paddingVertical: 20,
              backgroundColor: Theme.white,
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
              Directory
            </Text>
            <View>
              <Text></Text>
            </View>
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
              style={{marginBottom: 90}}
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
                      navigation.navigate('DirectoryDoctor', {
                        data: item,
                      });
                      // setSelected(item.id);
                    }}>
                    {/* <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // width: '70%',
                      }}> */}

                    <Text
                      style={[
                        styles.DoctorName,
                        {
                          color: selected === item.id ? '#fff' : Theme.lightgray,
                        },
                      ]}>
                      {item.Doctor_Spe}
                    </Text>

                    <Feather
                      name="chevron-right"
                      color={selected === item.id ? '#fff' : Theme.RightIcon}
                      size={30}
                    />

                    {/* </View> */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: Theme.white,
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 10,

    // justifyContent:"space-between"
    shadowColor: Theme.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 10.27,
    elevation: 10,
  },
  DoctorName: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
    lineHeight: 19,
    marginLeft:20
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

export default Directory;

{
  /*  */
}
