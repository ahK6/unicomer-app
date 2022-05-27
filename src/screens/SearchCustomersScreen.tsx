import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TopHeader from '../components/headers/TopHeader';

const SearchCustomersScreen = () => {
  let isTablet = deviceInfoModule.isTablet();

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
    </SafeAreaView>
  );
};

export default SearchCustomersScreen;
