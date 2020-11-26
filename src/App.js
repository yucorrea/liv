import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Routes from "./routes";

import {StatusBar} from "react-native";

import {AuthProvider} from "./hooks/auth";

const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#05282B"/>
    <NavigationContainer>
     <AuthProvider>
        <Routes />
     </AuthProvider>
    </NavigationContainer>
    </>
  )
}

export default App;