import React, { useEffect } from 'react';
import {StatusBar,useColorScheme,View} from 'react-native';
import StackNavigation from './src/Navigation/Stack';
import 'react-native-gesture-handler';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './src/config/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userDataFromAsyncStorage } from './src/config/reducer'; 

const getData = async () =>{
    try{
        let value = await AsyncStorage.getItem('token').then(res =>{
            return res;
        });
        return value;
    } catch(e){
        console.log(e)
    }
};

const UserAuthenticated = () =>{
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(() =>{
        (async () => {
            let value = getData().then(res => {
                let v = JSON.parse(res);
                if(v?.userId){
                    dispatch(userDataFromAsyncStorage(v));
                }
            });
        })().catch(err => {
            console.error(err);
        })
    },[]);
    return null;
};

const App = () =>{
    return(
        <Provider store={store}>
            <UserAuthenticated />
            <StackNavigation />
        </Provider>
    );
};

export default App;
