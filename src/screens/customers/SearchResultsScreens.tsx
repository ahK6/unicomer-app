import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, TitleLabel, TopHeader} from '../../components';
import CustomerCard from '../../components/cards/CustomerCard';
import useLocalCustomers from '../../hooks/useLocalCustomers';
import {SearchCustomerScreenProps} from '../../navigation/types';

const SearchCustomersResultsScreens = (props: any) => {
  const navigation = useNavigation<SearchCustomerScreenProps>();
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  const [searchCustomer, searchResults] = useLocalCustomers();
  const {keyword, searchType} = props.route.params;

  useEffect(() => {
    searchCustomer(searchType, keyword);
  }, [keyword]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          paddingHorizontal: wp(7),
        }}>
        {searchResults.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: isTablet ? hp(22) : hp(30)}}
            data={searchResults}
            renderItem={({item}: any) => (
              <CustomerCard {...item} containerStyle={{marginTop: 15}} />
            )}
          />
        ) : (
          <TitleLabel
            labelText="No se ha encontrado ningún registro"
            labelStyle={{color: 'black', marginTop: hp(10)}}
          />
        )}
      </View>
      <View
        style={{
          paddingVertical: 15,
          position: 'absolute',
          bottom: 0,
          width: wp(90),
          alignSelf: 'center',
          height: isTablet ? hp(10) : hp(12),
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Button
          onPress={() => {
            navigation.navigate('SearchCustomerScreen');
          }}
          buttonText="Buscar de nuevo"
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
