import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TopHeader} from '../../components';
import {usersData} from '../../constants/data';

export interface data {
  firstName: string;
  lastName: string;
}

const SearchCustomersResultsScreens = (props: any) => {
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);
  const customers = useMemo(() => usersData, []);
  const {keyword, searchType} = useMemo(() => props.route.params, []);

  const handleSearch = () => {
    let result: {}[] = [];

    switch (searchType) {
      case '1':
        result = customers.filter((item: any) =>
          `${item.firstName} ${item.lastName}`
            .toLowerCase()
            .includes(keyword.toLowerCase()),
        );
        break;
      case '2':
        result = customers.filter((item: any) =>
          `${item.birthday}`.includes(keyword),
        );
        break;

      case '3':
        result = customers.filter((item: any) =>
          `${item.cellphone}`.includes(keyword),
        );
        break;

      case '4':
        result = customers.filter((item: any) =>
          `${item.city}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '5':
        result = customers.filter((item: any) =>
          `${item.address}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '6':
        result = customers.filter((item: any) =>
          `${item.profession}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '7':
        result = customers.filter((item: any) =>
          `${item.incomes}`.includes(keyword),
        );
        break;
    }

    console.log(result);
  };

  useEffect(() => {
    handleSearch();
  }, [keyword]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
    </SafeAreaView>
  );
};

export default SearchCustomersResultsScreens;
