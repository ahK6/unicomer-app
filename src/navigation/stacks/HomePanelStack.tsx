import React from 'react';
import SearchCustomersScreen from '../../screens/customers/SearchCustomersScreen';
import SearchCustomersResultsScreens from '../../screens/customers/SearchResultsScreens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../components/DrawerMenu';
import AllCustomersScreens from '../../screens/customers/AllCustomersScreen';

const Drawer = createDrawerNavigator();

const HomePanelStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: 'transparent',
          width: 250,
        },
        sceneContainerStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name="SearchCustomerScreen"
        component={SearchCustomersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="SearchCustomerResultsScreen"
        component={SearchCustomersResultsScreens}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen
        name="AllCustomersScreen"
        component={AllCustomersScreens}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomePanelStack;
