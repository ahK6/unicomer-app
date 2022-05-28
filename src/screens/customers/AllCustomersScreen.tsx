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

const AllCustomersScreens = (props: any) => {
  const navigation = useNavigation<SearchCustomerScreenProps>();
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  const [serchCustomer, searchResults, customers] = useLocalCustomers();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TopHeader />
      <View
        style={{
          paddingHorizontal: wp(7),
        }}>
        <TitleLabel
          labelText="Listado de clientes"
          labelStyle={{fontSize: 18, paddingVertical: 10}}
        />
        {customers.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: isTablet ? hp(22) : hp(30)}}
            data={customers}
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
          buttonText="Buscar cliente"
        />
      </View>
    </SafeAreaView>
  );
};

export default AllCustomersScreens;
