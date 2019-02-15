
import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, createStackNavigator, navigationOptions } from 'react-navigation';

import bgImage from './src/images/background.jpg'
import logo from'./src/images/BeerGo!.png'

import register from './src/components/register'

class App extends React.Component{

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContent} blurRadius={20}>
          <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}></Image>
          </View>
          <View>
            <TextInput
              style={styles.textEmail}
              placeholder={'E-mail'}
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
            />
            <TextInput
              style={styles.textEmail}
              placeholder={'Senha'}
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
            />
          </View>
          <View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registrarButton} onPress={()=>{
              this.props.navigation.navigate('Register');
            }}>
              <Text style={styles.registrarText}>Registrar</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height: null,
  },
  logoContainer:{
    alignItems: 'center',
  },
  logo:{
    width: 200,
    height: 200,
  },
  textEmail:{
    marginVertical: 10,
    height: 40,
    width: 250,
    borderWidth:1,
    borderColor: 'transparent',
    borderBottomColor: 'white',
    color: 'rgba(255,255,255,0.7)',
  },
  loginButton:{
    marginTop:20,
    width: 250,
    height: 40,
    backgroundColor: "#D98F37",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:90,
  },
  loginText:{
    color: 'rgba(255,255,255,0.7)'
  },
  registrarButton:{
    marginTop:20,
    width: 250,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:90,
  },
  registrarText:{
    color: 'rgba(0,0,0,0.7)'
  }
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ()=>({
      header: null,
    }),
  },
  Register: {
    screen: register,
    navigationOptions: ()=>({
      header: null,
    }),
  },
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);