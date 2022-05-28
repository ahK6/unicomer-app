import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TopHeader} from '../../components';
import CustomerCard from '../../components/cards/CustomerCard';
import useLocalCustomers from '../../hooks/useLocalCustomers';

const SearchCustomersResultsScreens = (props: any) => {
  const [searchCustomer, searchResults] = useLocalCustomers();
  const {keyword, searchType} = useMemo(() => props.route.params, []);

  useEffect(() => {
    searchCustomer(searchType, keyword);
  }, [keyword]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TopHeader />
      <View
        style={{
          paddingHorizontal: wp(7),
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{height: hp(90)}}
          contentContainerStyle={{paddingBottom: 40}}
          data={searchResults}
          renderItem={({item}: any) => (
            <CustomerCard {...item} containerStyle={{marginTop: 15}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
