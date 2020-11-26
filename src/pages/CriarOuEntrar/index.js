import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native"
import logo from "../../assets/logo.png";

import { styles } from './styles';

const CriarOuEntrar = () => {

const { navigate } = useNavigation();

  return  (
      <LinearGradient colors={["#05282B", "#00878F"]} style={styles.container}>
          
        <Image source={logo} resizeMode="contain" />

        <TouchableOpacity style={styles.button}  onPress={() => navigate("Cadastrar")}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigate("Entrar")}>
            <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

      </LinearGradient>
  )
}

export default CriarOuEntrar;