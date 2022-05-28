import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const customerCardStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#055ea9',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 500,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
  },
  image: {
    height: 78,
    width: 78,
  },

  boldText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    width: wp(50),
  },
  text: {
    color: 'white',
    textAlign: 'left',
    width: wp(50),
  },
});
