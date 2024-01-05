import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import {hp, wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';
import {FontSize, Fonts} from '../Constant/Fonts';
import {LinkingURL} from './LinkingURL';

export const ToastComponent = ({title, body}) => {
  return (
    <TouchableWithoutFeedback onPress={() => LinkingURL()}>
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../Assets/Icons/Groove.png')}
          style={styles.img}
        />
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.body}>
            {body}
          </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    top: hp(7),
    backgroundColor: Colors.green,
    width: wp(90),
    position: 'absolute',
    borderRadius: wp(3),
    padding: wp(5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#005050',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    elevation: wp(2),
    alignSelf: 'center',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    marginLeft: wp(3),
    fontSize: FontSize.M,
    width: wp(70),
  },
  body: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    marginLeft: wp(3),
    fontSize: FontSize.XS,
    width: wp(70),
  },
  img: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(4),
    backgroundColor: Colors.white,
  },
});
