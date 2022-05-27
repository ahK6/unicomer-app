import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {InputTextStyle} from './inputsStyles';
import {InputTextParamsProps} from './inputsTypes';

const InputText: FC<InputTextParamsProps> = ({
  placeholder,
  onChangeText,
  value,
  inputStyle,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[InputTextStyle.input, inputStyle]}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputText;
