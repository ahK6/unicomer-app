import React from 'react';
import SearchCustomersScreen from '../../screens/customers/SearchCustomersScreen';
import SearchCustomersResultsScreens from '../../screens/customers/SearchResultsScreens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../components/DrawerMenu';
import AllCustomersScreens from '../../screens/customers/AllCustomersScreen';
import {TopHeader} from '../../components';

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
        header: ({navigation}) => <TopHeader />,
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name="SearchCustomerScreen"
        component={SearchCustomersScreen}
        options={{}}
      />
      <Drawer.Screen
        name="SearchCustomerResultsScreen"
        component={SearchCustomersResultsScreens}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen
        name="AllCustomersScreen"
        component={AllCustomersScreens}
        options={{}}
      />
    </Drawer.Navigator>
  );
};

export default HomePanelStack;
