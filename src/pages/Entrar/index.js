import React, {useState} from 'react';
import LinearGradient from "react-native-linear-gradient";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";

import logo from "../../assets/logo.png";

import { useAuth } from "../../hooks/auth"
import { styles } from './styles';

const Entrar = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useAuth();

  return  (
      <LinearGradient colors={["#05282B", "#00878F"]} style={styles.container}>
          
        <Image source={logo} resizeMode="contain" />

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
            style={styles.input}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            />
        </View>

        
        <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
            <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

      </LinearGradient>
  )
}

export default Entrar;