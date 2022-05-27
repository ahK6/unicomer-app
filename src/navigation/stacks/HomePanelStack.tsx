import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchCustomersScreen from '../../screens/customers/SearchCustomersScreen';
import SearchCustomersResultsScreens from '../../screens/customers/SearchResultsScreens';

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
      <Stack.Screen
        name="SearchCustomerResultsScreen"
        component={SearchCustomersResultsScreens}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomePanelStack;
