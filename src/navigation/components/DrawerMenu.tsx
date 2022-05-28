import React, {useMemo} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Platform, StyleSheet, Text, View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NormalLabel} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {
  AllCustomersScreenScreenProps,
  SearchCustomerResultsScreenProps,
} from '../types';
import {drawerMenuStyles} from './styles';

const DrawerMenu = ({props}: any) => {
  const navigation = useNavigation<
    SearchCustomerResultsScreenProps | AllCustomersScreenScreenProps
  >();

  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={[
        drawerMenuStyles.container,
        {height: isTablet ? hp(30) : hp(50)},
      ]}
      {...props}>
      <View style={[drawerMenuStyles.headerContainer]}>
        <NormalLabel
          labelText="Menú"
          labelStyle={{
            textAlign: 'left',
            color: 'white',
            fontWeight: 'bold',
          }}
        />
      </View>
      <View style={{marginTop: hp(2)}}>
        <DrawerItem
          key={0}
          label="Buscar clientes"
          onPress={() => {
            navigation.navigate('SearchCustomerScreen');
          }}
          style={{
            height: isTablet ? hp(4) : hp(6),
            width: wp('55%'),
            marginLeft: wp(4),
          }}
          labelStyle={{
            fontSize: 16,
          }}></DrawerItem>
      </View>
      <View>
        <DrawerItem
          key={1}
          label="Listado de clientes"
          onPress={() => {
            navigation.navigate('AllCustomersScreen');
          }}
          style={{
            height: isTablet ? hp(4) : hp(6),
            width: wp('55%'),
            marginLeft: wp(4),
          }}
          labelStyle={{
            fontSize: 16,
          }}></DrawerItem>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
