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
import {SearchCustomerResultsScreenProps} from '../../navigation/types';
import DropdownSelect from '../../components/dropdown/Dropdown';

const SearchCustomersScreen = () => {
  const navigation = useNavigation<SearchCustomerResultsScreenProps>();
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  const [keyword, setKeyword] = useState<string>('');
  const [value, setValue] = useState('1');
  const [isFocus, setIsFocus] = useState(false);
  const handleTextChange = (value: string) => {
    setKeyword(value);
  };

  const handleSubmit = () => {
    navigation.navigate('SearchCustomerResultsScreen', {
      keyword,
      searchType: value,
    });
  };

  const handleDropdownChange = (item: any) => {
    setValue(item.value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
        <View style={{marginTop: isTablet ? hp(15) : hp(12)}}>
          <DropdownSelect
            onChange={handleDropdownChange}
            value={value}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
          />
          <InputText
            placeholder={
              value === '1'
                ? 'Pedro, Luis Carcamo...'
                : value === '2'
                ? '12/04/1995'
                : value === '3'
                ? '01225455455'
                : value === '4'
                ? 'Sonsonate, La Paz...'
                : value === '5'
                ? 'Montes de san bartolo'
                : value === '6'
                ? 'Doctor, agricultor....'
                : '560'
            }
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
