import React, {useState, useCallback} from 'react';
import LinearGradient from "react-native-linear-gradient";
import {useAuth} from "../../hooks/auth";

import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";

import logo from "../../assets/logo.png";
import { styles } from './styles';


const Cadastrar = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { cadastro } = useAuth();

  return  (
      <LinearGradient colors={["#05282B", "#00878F"]} style={styles.container}>
          
        <Image source={logo} resizeMode="contain" />


        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput 
            value={name} 
            style={styles.input}
            autoCorrect={false}
            onChangeText={text => setName(text)}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
            value={email} 
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
            style={styles.input}
            value={password} 
            secureTextEntrys
            onChangeText={text => setPassword(text)}
            />
        </View>

        
        <TouchableOpacity style={styles.button} onPress={() => cadastro(name, email, password)}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </LinearGradient>
  )
}

export default Cadastrar;