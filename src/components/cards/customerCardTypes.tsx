import {ViewStyle} from 'react-native';

export interface CustomerCardParamsProps {
  profession: string;
  birthday: string;
  gender: string;
  incomes: number;
  firstName: string;
  lastName: string;
  cellphone: string;
  address: string;
  city: string;
  onButtonPress: () => void;
  containerStyle?: ViewStyle;
}
