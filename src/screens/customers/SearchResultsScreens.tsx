import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TopHeader} from '../../components';

const SearchCustomersResultsScreens = () => {
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
