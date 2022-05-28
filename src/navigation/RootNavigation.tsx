import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePanelStack from './stacks/HomePanelStack';
import {HomePanelParamList} from './types';

const Stack = createNativeStackNavigator<HomePanelParamList>();

export const RootNavigation = () => {
  {
    /* SI LA APLICACIÓN TUVIERA LOGIN, ES ESTA PARTE SE DEFINIRIA SI 
            REDIGERA AL LOGIN O AL MENU PRINPCIAL EN DADO CASO EL USUARIO HUBIERA 
            INICIADO SESION. POR DEFECTO HE DEJADO QUE REDIRIJA DE UAN VEZ A LA 
            PARTE DE "CLIENTES" */
  }

  const isLogged = true;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PanelNavigation">
        {isLogged && (
          <Stack.Screen
            name="HomePanel"
            component={HomePanelStack}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
