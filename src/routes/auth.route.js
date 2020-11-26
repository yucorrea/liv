import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } =  createStackNavigator();

import CriarOuEntrar from "../pages/CriarOuEntrar";
import Entrar from "../pages/Entrar";
import Cadastrar  from "../pages/Cadastrar";

const AppRoutes = () => {
  return (
      <Navigator >
          <Screen 
          name="CriarOuEntrar" component={CriarOuEntrar} 
          options={{headerShown: false}}/>
          <Screen 
          name="Entrar" 
          component={Entrar}
          options={{
            headerTitle: "Voltar",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#05282B"
            }
          }}
          />
          <Screen 
          name="Cadastrar" 
          component={Cadastrar}
          options={{
            headerTitle: "Voltar",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#05282B"
            }
          }}
          />
      </Navigator>
  )
}

export default AppRoutes;