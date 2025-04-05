import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import imagepath from '../../constant/imagepath';
import {
  height,
  moderateScale,
  scale,
  verticalScale,
  width,
} from '../../styles/scaling';
import colors from '../../styles/colors';
import fontFamily from '../../constant/fontFamily';
import CustomBtn from '../../components/CustomBtn';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainViewStyle}>
      <View style={styles.mainViewStyle}>
        <Image style={styles.imageStyle} source={imagepath.welcomeimage} />
        <Text style={styles.textStyle}>Discover Your Dream Job here</Text>
        <Text style={styles.exploreText}>
          Explore all the <Text style={styles.existingTextStyle}>existing</Text>{' '}
          job roles based on your interest and study major
        </Text>
        <View style={styles.btnView}>
          <CustomBtn
            mainBtnView={{width: '44%'}}
            onPress={() => navigation.navigate('Login')}
            lable={'Login'}
          />
          <CustomBtn
            onPress={() => navigation.navigate('CreateAccount')}
            mainBtnView={{backgroundColor: colors.white, width: '44%'}}
            labelTextStyle={{color: colors.black}}
            lable={'Register'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    height: height / 2,
    width: width / 1.2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: scale(36),
    textAlign: 'center',
    color: colors.blue,
    fontFamily: fontFamily.semiBold,
  },
  exploreText: {
    fontSize: scale(14),
    fontFamily: fontFamily.regular,
    color: colors.black,
    textAlign: 'center',
    marginTop: verticalScale(12),
  },
  existingTextStyle: {
    fontSize: scale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    textAlign: 'center',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(32),
    marginTop: verticalScale(40),
  },
});
