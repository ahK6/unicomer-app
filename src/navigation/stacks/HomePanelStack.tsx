import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchCustomersScreen from '../../screens/SearchCustomersScreen';

const Stack = createNativeStackNavigator();

const HomePanelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchCustomerScreen"
        component={SearchCustomersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomePanelStack;
