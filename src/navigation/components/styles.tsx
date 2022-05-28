import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const drawerMenuStyles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    marginTop: 50,
    overflow: 'hidden',
  },

  headerContainer: {
    width: wp(100),
    backgroundColor: '#055ea9',
    height: 60,
    marginTop: -5,
    justifyContent: 'center',
    paddingLeft: wp(10),
  },

  menuItem: {
    width: wp('55%'),
    marginLeft: wp(4),
  },
});
