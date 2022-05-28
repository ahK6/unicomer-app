import React, {FC, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {dropdownData} from '../../constants/data';
import {dropdownStyles} from './dropDownStyles';
import {DropdownParamsProps} from './dropdownTypes';

const DropdownSelect: FC<DropdownParamsProps> = ({
  onChange,
  setIsFocus,
  value,
  isFocus,
}) => {
  const data = useMemo(() => dropdownData, []);

  return (
    <Dropdown
      style={[dropdownStyles.dropdown, isFocus && {borderColor: '#055ea9'}]}
      placeholderStyle={dropdownStyles.placeholderStyle}
      selectedTextStyle={dropdownStyles.selectedTextStyle}
      inputSearchStyle={dropdownStyles.inputSearchStyle}
      iconStyle={dropdownStyles.iconStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Buscar por' : '...'}
      searchPlaceholder="Buscar caterogoría"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={onChange}
    />
  );
};

export default DropdownSelect;
