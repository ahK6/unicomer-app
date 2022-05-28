import React, {FC, useMemo} from 'react';
import {Image, View} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NormalLabel, Button} from '../index';
import {customerCardStyle} from './customerCardStyle';
import {CustomerCardParamsProps} from './customerCardTypes';

const CustomerCard: FC<CustomerCardParamsProps> = ({
  profession,
  birthday,
  gender,
  incomes,
  firstName,
  lastName,
  cellphone,
  address,
  city,
  onButtonPress,
  containerStyle,
}) => {
  let isTablet = useMemo(() => deviceInfoModule.isTablet(), []);

  return (
    <View
      style={[
        customerCardStyle.container,
        containerStyle,
        {paddingVertical: isTablet ? 20 : 20},
      ]}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: isTablet ? wp(20) : wp(25),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={customerCardStyle.imageContainer}>
            <Image
              style={customerCardStyle.image}
              source={{
                uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', //si llevara imagen esto se mandaria por parametro
              }}
            />
          </View>

          <NormalLabel
            labelText={profession}
            labelStyle={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
            }}
          />
          <NormalLabel
            labelText={birthday}
            labelStyle={{
              color: 'white',
              fontSize: 12,
            }}
          />
          <NormalLabel
            labelText={gender}
            labelStyle={{
              color: 'white',
            }}
          />
          <NormalLabel
            labelText={'$' + incomes}
            labelStyle={{
              color: 'white',
            }}
          />
        </View>
        <View style={{marginLeft: 20, width: wp(20)}}>
          <View>
            <NormalLabel
              labelText="Nombre: "
              labelStyle={customerCardStyle.boldText}
            />
            <NormalLabel
              labelText={firstName + ' ' + lastName}
              labelStyle={customerCardStyle.text}
            />
          </View>

          <View>
            <NormalLabel
              labelText="Teléfono: "
              labelStyle={customerCardStyle.boldText}
            />
            <NormalLabel
              labelText={cellphone}
              labelStyle={customerCardStyle.text}
            />
          </View>
          <View>
            <NormalLabel
              labelText="Dirección: "
              labelStyle={customerCardStyle.boldText}
            />
            <NormalLabel
              labelText={address + ', ' + city}
              labelStyle={customerCardStyle.text}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          marginTop: 30,
        }}
      />
      <Button
        onPress={onButtonPress}
        buttonText="Ver ficha"
        styleButton={{backgroundColor: 'white', marginTop: 20}}
        labelStyle={{color: '#055ea9'}}
      />
    </View>
  );
};

export default CustomerCard;
