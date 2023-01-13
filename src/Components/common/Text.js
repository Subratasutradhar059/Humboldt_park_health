import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default props => (
  <Text
    {...props}
    style={[
      {
        fontFamily: props.Bold ? 'OpenSans-ExtraBold' : 'OpenSans-Regular',
        fontSize: 16,
        color:"#000",
      },
      props.style,
    ]}>
    {props.children}
  </Text>
);
