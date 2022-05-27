import React, {FC} from 'react';
import {Text} from 'react-native';
import {normalLabelStyle, titleLabelStyle} from './labelsStyles';
import {TitleLabelsParamsTypes} from './labelsTypes';

const NormalLabel: FC<TitleLabelsParamsTypes> = ({labelText, labelStyle}) => {
  return <Text style={[normalLabelStyle.label, labelStyle]}>{labelText}</Text>;
};

export default NormalLabel;
