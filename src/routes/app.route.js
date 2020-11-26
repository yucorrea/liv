import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } =  createStackNavigator();

import Inicio from "../pages/Inicio";
import Detalhes from "../pages/Detalhes";

const AuthRoutes = () => {
  return (
      <Navigator >
          <Screen 
          name="Inicio" component={Inicio} 
          options={{headerShown: false}}
         />
           <Screen 
            name="Detalhes" component={Detalhes} 
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

export default AuthRoutes;