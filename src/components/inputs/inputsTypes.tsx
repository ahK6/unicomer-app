import {ViewStyle} from 'react-native';

export interface InputTextParamsProps {
  placeholder: string;
  inputStyle?: ViewStyle;
  onChangeText: (value: string) => void;
  value: string;
}
