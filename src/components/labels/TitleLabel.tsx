import React, {FC} from 'react';
import {Text} from 'react-native';
import {titleLabelStyle} from './labelsStyles';
import {TitleLabelsParamsTypes} from './labelsTypes';

const TitleLabel: FC<TitleLabelsParamsTypes> = ({labelText, labelStyle}) => {
  return <Text style={[titleLabelStyle.label, labelStyle]}>{labelText}</Text>;
};

export default TitleLabel;
