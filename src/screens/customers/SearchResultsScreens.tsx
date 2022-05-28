import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TopHeader} from '../../components';

export interface data {
  firstName: string;
  lastName: string;
}

const SearchCustomersResultsScreens = (props: any) => {
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  const {keyword, searchType} = useMemo(() => props.route.params, []);

  console.log(keyword, ' ' + searchType);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
