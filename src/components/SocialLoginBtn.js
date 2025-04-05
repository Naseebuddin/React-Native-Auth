import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imagepath from '../constant/imagepath';
import {moderateScale} from '../styles/scaling';
import colors from '../styles/colors';

const SocialLoginBtn = ({onPressGoogle, onPressFacebook, onPressApple}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={onPressGoogle}
        style={{
          ...styles.btnView,
        }}>
        <Image style={{...styles.imgeStyle}} source={imagepath.google} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressFacebook}
        style={{
          ...styles.btnView,
        }}>
        <Image style={{...styles.imgeStyle}} source={imagepath.facebook} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressApple}
        style={{
          ...styles.btnView,
        }}>
        <Image style={{...styles.imgeStyle}} source={imagepath.apple} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLoginBtn;

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: colors.socialColor,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginRight: moderateScale(12),
  },
  imgeStyle: {width: moderateScale(22), height: moderateScale(22)},
});
