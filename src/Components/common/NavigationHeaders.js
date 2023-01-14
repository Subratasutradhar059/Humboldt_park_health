import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
const NavigationHeaders = ({onPress, title,inlineStyle}) => {
  return (
    <View style={styles.header}>
      <Feather name="chevron-left" color="#008EAA" size={25}  onPress={onPress}  />
      <Text style={[styles.txetHeader, {...inlineStyle}]}>
        {title}
      </Text>
      <Text style={[styles.txetHeader, {}]}>
      </Text>
    </View>
  );
};

export default NavigationHeaders;

const styles = StyleSheet.create({
  header: {
    maxWidth:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  txetHeader: {
    fontWeight: 'bold',
    fontFamily:"OpenSans-RegularBold",
    color: '#008EAA',
    fontSize:18,
    fontWeight:"800"
  },
});
