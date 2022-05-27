import React, {useMemo, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  TopHeader,
  InputText,
  NormalLabel,
  TitleLabel,
} from '../../components';

const SearchCustomersScreen = () => {
  const navigation = useNavigation();
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  const [keyword, setKeyword] = useState<string>('');

  const handleTextChange = (value: string) => {
    setKeyword(value);
  };

  const handleSubmit = () => {
    navigation.navigate('SearchCustomerResultsScreen');
  };

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
        <View style={{marginTop: isTablet ? hp(18) : hp(12)}}>
          <InputText
            placeholder="Buscador por..."
            onChangeText={handleTextChange}
            value={keyword}
          />
          <Button
            onPress={handleSubmit}
            buttonText="Buscar"
            styleButton={{marginTop: 15}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchCustomersScreen;
