import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TopHeader} from '../../components';
import {usersData} from '../../constants/data';
import useLocalCustomers from '../../hooks/useLocalCustomers';

const SearchCustomersResultsScreens = (props: any) => {
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);
  const [searchCustomer, searchResults] = useLocalCustomers();
  const {keyword, searchType} = useMemo(() => props.route.params, []);

  useEffect(() => {
    searchCustomer(searchType, keyword);
  }, [keyword]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
      {searchResults.map((item: any) => (
        <Text>{item.firstName} </Text>
      ))}
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
