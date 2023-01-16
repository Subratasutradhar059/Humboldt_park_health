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

const Directory = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  const [checked, setChecked] = useState(true);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme.white, }}>
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

          <View style={{flexDirection: 'row', justifyContent: "space-between",alignItems:"center",paddingHorizontal:20}}>
          <Image
              source={require('../../Assets/Images/AppLogo.png')}
              style={styles.appLogoStyle}
              resizeMode="contain"
            />
            <Text style={{color: '#008EAA',fontSize: 16, fontWeight: '700',marginLeft:-90}}>
            Directory
            </Text>
            <View><Text></Text></View>            
          </View>

          <View style={{backgroundColor:Theme.primary,width:"100%",height:55,marginVertical:10 }}>
            <Text Bold style={{marginHorizontal:10,marginTop:15,fontWeight:"600",color:"#fff"}}>You are not verified ! </Text>
          </View>


          <View style={{alignItems:"center",marginTop:80}}>
{/* 
            <Image source={require('../../Assets/Images/WatingImage.png')}
              style={styles.WaitingImage}
              resizeMode="contain"
            /> */}
            <Text style={{color:Theme.gray,fontWeight:"600"}}>Your account is not verified yet..</Text>
          </View>

          <Text>jhwdgjfgsjffhgjgj</Text>








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
  WaitingImage:{
    width:350,
    height:310
  }
});

export default Directory;

{
  /*  */
}
