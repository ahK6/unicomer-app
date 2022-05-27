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
import NormalLabel from '../components/labels/NormalLabel';
import TitleLabel from '../components/labels/TitleLabel';

const SearchCustomersScreen = () => {
  let isTablet = deviceInfoModule.isTablet();

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />

      <View
        style={{
          marginTop: isTablet ? hp(20) : hp(12),
          paddingHorizontal: wp(7),
        }}>
        <View>
          <TitleLabel labelText={'Buscar cliente'} />
          <NormalLabel
            labelText="Puedes buscar clientes utilizando su nombre, apellido, fecha de
                      cumpleaños, genero, dirección, profesión o ingresos."
            labelStyle={{marginTop: 15}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchCustomersScreen;
