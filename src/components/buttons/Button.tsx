import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyle} from './buttonsStyles';
import {ButtonsParamsProps} from './buttonsTypes';

const Button: FC<ButtonsParamsProps> = ({
  buttonText,
  type,
  styleButton,
  labelStyle,
}) => {
  return (
    <TouchableOpacity style={[buttonStyle.button, styleButton]}>
      <Text
        style={[
          {color: 'white', fontSize: 16, fontWeight: 'bold'},
          labelStyle,
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
