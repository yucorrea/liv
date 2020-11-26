import React, {useState, useEffect} from 'react';
import LinearGradient from "react-native-linear-gradient";
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from "react-native";

import firestore from "@react-native-firebase/firestore";

import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import lupa from "../../assets/lupa.png";

import { useAuth } from "../../hooks/auth"
import { styles } from './styles';

const Inicio = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])


  const { navigate } = useNavigation();

  useEffect(() => {

    firestore().collection("books").get().then(response => {

      let booksArray = []
      response.forEach(doc => {
        console.log(doc.data())
        booksArray.push(doc.data())
      })

      setBooks(booksArray)
    }).catch(err => {
      Alert.alert('Ops!', err)
    })
  },[])

  const {login, user, deslogar} = useAuth();

  return  (
      <LinearGradient colors={["#05282B", "#00878F"]} style={styles.container}>
          
        <View style={styles.header}>
            <Image 
            source={logo} 
            resizeMode="contain"
            style={{width: 70}}
             />

            <View style={styles.profile} >
              <Image style={styles.avatar} source={avatar} resizeMode="contain"/>
              <Text style={styles.name}>{user.name}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={deslogar}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
            <TextInput 
             value={search} 
             style={styles.input}
             placeholder="Buscar"
             onChangeText={text => setSearch(text)}
            />

           <TouchableOpacity>
            <Image 
              source={lupa} 
              resizeMode="contain"
              style={{width: 70}}
              />
           </TouchableOpacity>
        </View>

      {books.map((item, index) => (
        <TouchableOpacity 
        key={index} 
        style={{flexDirection: "row", marginVertical: 16}}
        onPress={() => navigate("Detalhes", {book: item})}
        onLongPress={() => Alert.alert(item.name,item.description)}
        >
           <Image 
                source={{uri: item.image}} 
                resizeMode="cover"
                style={{width: 118, height: 190}}
              />   
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 18, color: "#fff",marginVertical: 8 }}>Nome:</Text>
            <Text style={{fontSize: 14, color: "#fff"}}>{item.name}</Text>

            <Text style={{fontSize: 18, color: "#fff", marginVertical: 8}}>Categoria:</Text>
            <Text style={{fontSize: 14, color: "#fff"}}>{item.category}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </LinearGradient>
  )
}

export default Inicio;