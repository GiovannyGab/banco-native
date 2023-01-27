import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import User from "./src/User";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState();
  const [money, setMoney] = useState(0);
  return (
    <View style={styles.container}>
    <Image source={require("./src/assets/banco-original-logo-1-1.png")} style={styles.img}/>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        style={styles.input}
        placeholder="Nome"
      />

      <TextInput
        value={age}
        onChangeText={(age) => setAge(age)}
        style={styles.input}
        placeholder="Idade"
      />
      <Picker
      value={Picker.Item.value}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item key={0} value="Masculino" label="Masculino" />
        <Picker.Item key={1} value="Feminino" label="Feminino" />
      </Picker>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10000}
        minimumTrackTintColor="green"
        maximumTrackTintColor="#000000"
        value={money}
        onValueChange={(value) => setMoney(value)}
      ></Slider>
      <Text style={styles.money}>
        Qual seu valor Salarial Mensal: {money.toFixed(0)} Reais
      </Text>

      <TouchableOpacity style={styles.btn} onPress={() => send()}>
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );

  function send() {
    alert(
      "Parabens, Conta criada com sucesso!!" +
        "\n" +
        "\n" +
        "Seus Dados:" +
        "\n" +
        name +
        "\n" +
        age +
        "\n" +
        gender +
        "\n" +
        money.toFixed(0)+" reais"+
        "\n"
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img:{
width:400,
height:120,
  },
  input: {
    width: 350,
    height: 40,
    marginTop: 10,
    borderColor: "#4DEF78",
    padding: 10,
    
    borderWidth: 1,
  },
  picker: {
    paddingLeft: 400,
    marginLeft: 10,
  },
  slider: {
    width: 400,
    height: 40,
  },
  money: {
    fontSize: 18,
  },
  btn:{
    borderColor:"green",
    width:150,
    height:50,
    marginTop:20,
    backgroundColor:"#4DEF78",
    borderRadius:15,
    justifyContent:'center',
    alignItems:"center"
    
  },
  btnText:{
    fontSize:20,
    fontWeight:"bold",
    color:"#FFFFFF"
  }
});
