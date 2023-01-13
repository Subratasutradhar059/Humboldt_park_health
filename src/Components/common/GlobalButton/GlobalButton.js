import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import { Colors, Fonts, Sizes } from "../constant/style";

const GlobalButton = ({
  onPress,
  title,
  inlineStyle,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 0.5 : 1}
      onPress={() => {
        if (!disabled) {
          onPress()
        }
      }}
      style={[styles.continueButtonStyle, { backgroundColor:disabled ? 'gray' : "#81D742", paddingVertical: 15, marginTop: 5, ...inlineStyle }]}
    >
      <Text style={{color:"#fff",  textAlign: 'center' ,fontSize:24,fontWeight:"800",fontFamily:"OpenSans-SemiBold" }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default GlobalButton

const styles = StyleSheet.create({

  continueButtonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: '100%',
    alignSelf: "center",
    borderRadius: 10,
  },
})