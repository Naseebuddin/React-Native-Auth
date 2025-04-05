import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../styles/scaling';
import colors from '../styles/colors';
import fontFamily from '../constant/fontFamily';

const CustomBtn = ({onPress, lable,mainBtnView,labelTextStyle}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnViewStyle,...mainBtnView
      }}
      onPress={onPress}>
      <Text style={{...styles.lableStyle,...labelTextStyle}}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btnViewStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(48),
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  lableStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(16),
    color: colors.white,
  },
});
