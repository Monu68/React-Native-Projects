import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Home</Text>
      <Button title='Profile' onPress={() => navigation.navigate("Profile")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    
})