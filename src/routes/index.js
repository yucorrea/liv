import React from 'react';

import { useAuth } from "../hooks/auth";

import AuthRoutes from "./auth.route";
import AppRoutes from "./app.route";

const Routes = () => {

  const { isLogged } = useAuth();

  console.log(isLogged)
  return isLogged ? <AppRoutes /> : <AuthRoutes/>
}

export default Routes;