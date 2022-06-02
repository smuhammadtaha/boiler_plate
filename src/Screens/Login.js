import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';


export const Login = (props) => {
  const dispatch = useDispatch();
  const setToken = async value =>{
    try{
      const jsonValue = JSON.stringify(value);
      const v = {
        userId : 'abc-def-jhik-lmno'
      };
      await AsyncStorage.setItem('token', JSON.stringify(v));
      await AsyncStorage.setItem('user', JSON.stringify(v));
      let value1 = await AsyncStorage.getItem('token');
      let value2 = await AsyncStorage.getItem('user').then(res =>{
        console.log('LoggedIn');
        let val = JSON.parse(res);
        dispatch(userDataFromAsyncStorage(val));
      });
    }catch(e){
      console.log(e);
    }
  };


  return (
    <ScrollView>
      <KeyboardAvoidingView 
        style={{flex:1}}
      >
      <View>
        <Text>Login</Text>
        <View
          style={{
            width:'90%',
            alignSelf:'center',
            justifyContent:'space-between',
            alignItems:'center',
            borderBottomWidth:2,
            borderBottomColor:'#000'
          }}>
            <View style={{width:'100%',flexDirection:'row',height:50}}>
              <TextInput 
                style={{width:'80%',height:'100%'}}
                placeholder="Enter Your Email"
              />
            </View>
            <View style={{width:'100%',flexDirection:'row',height:50}}>
              <TextInput 
                style={{width:'80%',height:'100%'}}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
            </View>
        </View>
        <TouchableOpacity 
          style={{
            padding:30,
            backgroundColor:'black',
            margin:10,
            justifyContent:'center',
            alignItems:'center',
          }}
          onPress={() => {
            setToken();
          }}>
            <Text style={{color:'white'}}>Login</Text>
         </TouchableOpacity>   
         <TouchableOpacity
         onPress={()=>{
           props.navigation.navigate('Signup');
         }}
         style={{
           padding:10,
           margin:10,
           backgroundColor:'#f9f9f9',
           borderWidth:1,
           borderRadius:5,
         }}>
           <Text>Not LoggedIn?</Text>
         </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
