import {
  Alert,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  width,
} from '../../styles/scaling';
import colors from '../../styles/colors';
import fontFamily from '../../constant/fontFamily';
import CustomTextinputComp from '../../components/CustomTextinputComp';
import CustomBtn from '../../components/CustomBtn';
import SocialLoginBtn from '../../components/SocialLoginBtn';
import {useNavigation} from '@react-navigation/native';

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainViewstyle}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            ...styles.mainViewstyle,
            paddingTop: Platform.OS == 'ios' ? 0 : moderateScaleVertical(20),
            backgroundColor: colors.white,
            paddingHorizontal: moderateScale(20),
          }}>
          <View style={{flex: 0.7}}>
            <View style={styles.textView}>
              <Text style={styles.loginText}>Create Account</Text>
              <Text style={styles.welText}>
                Create an account so you can explore all the existing jobs
              </Text>
            </View>
            <View style={styles.intpuViewStyle}>
              <CustomTextinputComp placeholder={'Email'} />
              <CustomTextinputComp placeholder={'Password'} />
              <CustomTextinputComp placeholder={'Confirm Password'} />
            </View>
            <CustomBtn lable={'Sign up'} />
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.createText}>
              Already have an account
            </Text>
          </View>

          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: moderateScaleVertical(40),
            }}>
            <Text
              onPress={() => Alert.alert('working')}
              style={styles.continueStyle}>
              Or continue with
            </Text>
            <SocialLoginBtn
              onPressApple={() => Alert.alert('Apple bnt')}
              onPressFacebook={() => Alert.alert('Facebook btn')}
              onPressGoogle={() => Alert.alert('Google')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  mainViewstyle: {
    // paddingHorizontal: moderateScale(20),
    flex: 1,
    backgroundColor: Platform.OS == 'ios' ? colors.white : 'transparent',
  },
  textView: {
    alignItems: 'center',
    paddingTop: moderateScaleVertical(20),
  },
  loginText: {
    fontSize: scale(30),
    fontFamily: fontFamily.bold,
    color: colors.blue,
  },
  welText: {
    fontFamily: fontFamily.medium,
    fontSize: scale(14),
    color: colors.black,
    width: width / 1.1,
    textAlign: 'center',
    marginTop: moderateScale(26),
  },
  intpuViewStyle: {
    marginTop: moderateScaleVertical(20),
    marginBottom: moderateScale(40),
  },
  forgetText: {
    fontSize: scale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.blue,
    textAlign: 'right',
    marginBottom: moderateScaleVertical(40),
  },
  createText: {
    fontSize: scale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.createColor,
    textAlign: 'center',
    marginTop: moderateScaleVertical(40),
  },
  continueStyle: {
    fontSize: scale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.blue,
    textAlign: 'center',
    marginBottom: moderateScaleVertical(20),
  },
});
