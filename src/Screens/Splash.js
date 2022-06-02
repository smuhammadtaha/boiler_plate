import React from 'react'
import {View,Text,ActivityIndicator} from 'react-native'

export const SplashScreen = () => {
  return (
    <View
    style={{
      width:'100%',
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style={{color:'white',fontSize:24}}>Splash Screen</Text>
      <ActivityIndicator size={80} color='#fff' />
    </View>
  )
}
