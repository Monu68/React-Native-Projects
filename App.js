
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [display, setDisplay] = useState(false);

  const erase = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDisplay(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form</Text>
      <TextInput 
        style={styles.inputField} placeholder='Enter your name' 
        onChangeText={(text) => setName(text)} value={name}/>
      <TextInput 
        style={styles.inputField} placeholder='Enter email id' 
        onChangeText={(text) => setEmail(text)} value={email}/>
      <TextInput 
        style={styles.inputField} placeholder='Enter Password' 
        onChangeText={(text) => setPassword(text)} value={password}/>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
        <Button style={{color: "green"}} title='Print' 
        onPress={() => setDisplay(true)}/>
        <Button title='Clear' onPress={erase}/>
      </View>

      {
        display ?
        <View>
          <Text style={{fontSize:20}}>Your username is: {name}</Text>
          <Text style={{fontSize:20}}>Your emailid is: {email}</Text>
          <Text style={{fontSize:20}}>Your password is: {password}</Text>
        </View>
        :null

      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 50,
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold', 
  },
  inputField:{
    margin: 10,
    borderWidth: 1,
    width: 300,
    fontSize: 18,
    borderColor: 'black',
    color: 'blue',
  }

})


