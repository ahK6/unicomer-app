import React, {FC} from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {topHeaderStyle} from './headersStyles';
import {TopHeaderParamsTypes} from './headersTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export const TopHeader: FC<TopHeaderParamsTypes> = ({
  containerStyle,
  imageStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[topHeaderStyle.topHeaderContainer, containerStyle]}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={[topHeaderStyle.topHeaderImage, imageStyle]}
      />
      <TouchableOpacity
        onPress={() => {
          (navigation as any).openDrawer();
        }}
        style={topHeaderStyle.iconContainer}>
        <Icon name="bars" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
