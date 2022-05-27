import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonsParamsProps {
  buttonText: string;
  onPress: () => void;
  type?: string;
  styleButton?: ViewStyle;
  labelStyle?: TextStyle;
}
