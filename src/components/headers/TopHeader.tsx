import React, {FC} from 'react';

import {Image, View} from 'react-native';
import {topHeaderStyle} from './headersStyles';
import {TopHeaderParamsTypes} from './headersTypes';

export const TopHeader: FC<TopHeaderParamsTypes> = ({
  containerStyle,
  imageStyle,
}) => {
  return (
    <View style={[topHeaderStyle.topHeaderContainer, containerStyle]}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={[topHeaderStyle.topHeaderImage, imageStyle]}
      />
    </View>
  );
};

export default TopHeader;
