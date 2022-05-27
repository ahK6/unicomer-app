import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const topHeaderStyle = StyleSheet.create({
  topHeaderContainer: {
    backgroundColor: '#055ea9',
    width: wp(100),
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHeaderImage: {
    width: 145,
    height: 60,
  },
});
