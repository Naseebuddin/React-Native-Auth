import {
  Alert,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  width,
} from '../../styles/scaling';
import fontFamily from '../../constant/fontFamily';
import CustomTextinputComp from '../../components/CustomTextinputComp';
import CustomBtn from '../../components/CustomBtn';
import SocialLoginBtn from '../../components/SocialLoginBtn';
import {emailValidation, passwordValidation} from '../../utils/Validation';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [emailError, setemailError] = useState();
  const [passwordError, setpasswordError] = useState();

  const handleValidationCall = () => {
    const checkEmailValidation = emailValidation(email);
    const checkPasswordValidation = passwordValidation(password);

    setemailError(checkEmailValidation);
    setpasswordError(checkPasswordValidation);

    if (!checkEmailValidation && !checkPasswordValidation) {
      // Alert.alert('pass condition');
      CallApi();
    } else {
      Alert.alert('Please fill your inputs');
    }
  };

  const CallApi = async () => {
    await axios
      .post('https://api.escuelajs.co/api/v1/auth/login', {
        email: 'john@mail.com',
        password: 'changeme',
      })
      .then(res => {
        console.log(res?.data, 'ress');

        navigation.navigate('Home')
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainViewstyle}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            ...styles.mainViewstyle,
            backgroundColor: colors.white,
            paddingHorizontal: moderateScale(20),
            paddingTop: Platform.OS == 'ios' ? 0 : moderateScaleVertical(20),
          }}>
          <View style={{flex: 0.7}}>
            <View style={styles.textView}>
              <Text style={styles.loginText}>Login here</Text>
              <Text style={styles.welText}>
                Welcome back you’ve been missed!
              </Text>
            </View>
            <View style={styles.intpuViewStyle}>
              <CustomTextinputComp
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setemailError(emailValidation(text));
                }}
                placeholder={'Email'}
              />

              {emailError && (
                <Text
                  style={{
                    color: colors.red,
                    marginBottom: moderateScaleVertical(12),
                    fontFamily: fontFamily.regular,
                  }}>
                  {emailError}
                </Text>
              )}
              <CustomTextinputComp
                value={password}
                onChangeText={text => {
                  setpassword(text);
                  setpasswordError(passwordValidation(text));
                }}
                placeholder={'Password'}
              />

              {passwordError && (
                <Text
                  style={{
                    color: colors.red,
                    marginBottom: moderateScaleVertical(12),
                    fontFamily: fontFamily.regular,
                  }}>
                  {passwordError}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => Alert.alert('working')}>
              <Text style={styles.forgetText}>Forgot your password?</Text>
            </TouchableOpacity>
            <CustomBtn
              onPress={() => handleValidationCall()}
              lable={'Sign in'}
            />
            <Text
              onPress={() => navigation.navigate('CreateAccount')}
              style={styles.createText}>
              Create new account
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              justifyContent: 'flex-end',

              marginBottom: moderateScale(40),
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

export default Login;

const styles = StyleSheet.create({
  mainViewstyle: {
    backgroundColor: Platform.OS == 'ios' ? colors.white : 'transparent',
    flex: 1,
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
    fontFamily: fontFamily.semiBold,
    fontSize: scale(20),
    color: colors.black,
    width: width / 1.5,
    textAlign: 'center',
    marginTop: moderateScale(26),
  },
  intpuViewStyle: {
    marginTop: moderateScaleVertical(20),
  },
  forgetText: {
    fontSize: scale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.blue,
    // textAlign: 'right',
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
