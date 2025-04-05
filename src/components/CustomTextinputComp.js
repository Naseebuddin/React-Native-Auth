import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {moderateScaleVertical, scale} from '../styles/scaling';
import fontFamily from '../constant/fontFamily';
import colors from '../styles/colors';

const CustomTextinputComp = ({
  placeholder,
  onChangeText,
  value,
  maxLength,
  secureTextEntry,
  mainViewStyle,
}) => {
  const [isFocused,setIsFocused] = useState(false)
  return (
    <View style={{...styles.mainStyle, ...mainViewStyle,
      borderWidth:isFocused ?1 : 0,
      borderColor:isFocused? colors.blue :'transparent'
    }}>
      <TextInput
        style={{fontSize: scale(16), fontFamily: fontFamily.medium,
          width:'100%',
          flex:1,
          height:moderateScaleVertical(54),
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        placeholderTextColor={colors.black}
        secureTextEntry={secureTextEntry}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
      />
    </View>
  );
};

export default CustomTextinputComp;

const styles = StyleSheet.create({
  mainStyle: {
    width: '100%',
    height: moderateScaleVertical(54),
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: moderateScaleVertical(12),
    backgroundColor: colors.inputBackgroundColor,
    marginBottom:moderateScaleVertical(20)
  },
});
