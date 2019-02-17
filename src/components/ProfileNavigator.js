import React, { Component } from 'react';

import {TextInput, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import  ImagePicker from 'react-native-image-picker';

import bgImage from '../images/background.jpg';

import firebase from '@firebase/app';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const options2 = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


class ProfileNavigator extends React.Component{

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyBR9MT51q938MNylD0Y324FGF-XEroqn4A",
            authDomain: "beergo-28ad5.firebaseapp.com",
            databaseURL: "https://beergo-28ad5.firebaseio.com",
            projectId: "beergo-28ad5",
            storageBucket: "beergo-28ad5.appspot.com",
            messagingSenderId: "294518420928"
          };
          firebase.initializeApp(config);
                
    }

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            senha: '',
            states: '',
            city: '',
            street: '',
            number: '',
            cel: '',
        }
    }

    show=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }

    show2=()=>{
        ImagePicker.showImagePicker(options2, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource2: source,
              });
            }
          });
    }

    register=()=>{
        
        var addUser = firebase.database().ref("users/");
        addUser.push().set({
            name:'ola',
            idade:'creu',
        });
        addUser.push().set({
            name: this.state.name,
            email: this.state.email,
            senha: this.state.senha,
            state: this.state.states,
            city: this.state.city,
            street: this.state.street,
            number: this.statenumber,
            cel: this.state.cel,
        });
    }


    render(){
        return(
            <View style={styles.backgroundContent}>
                <View>
                    <TextInput 
                        style={styles.textName}
                        placeholder={'Nome'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(name)=>this.setState({name})}
                        value={this.state.name}
                    />
                    <TextInput 
                        style={styles.textName}
                        placeholder={'E-mail'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(email)=>this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput 
                        style={styles.textName}
                        secureTextEntry={true}
                        placeholder={'Senha'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(senha)=>this.setState({senha})}
                        value={this.state.senha}
                    />
                </View>
                <View style={styles.cityAndState}>
                    <TextInput 
                        style={styles.textState}
                        placeholder={'PB'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(states)=>this.setState({states})}
                        value={this.state.states}
                    />
                    <TextInput 
                        style={styles.textCity}
                        placeholder={'Cidade'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(city)=>this.setState({city})}
                        value={this.state.city}
                    />
                </View>
                <View style={styles.cityAndState}>
                    <TextInput 
                        style={styles.textCity}
                        placeholder={'Rua'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(street)=>this.setState({street})}
                        value={this.state.street}
                    />
                    <TextInput 
                        style={styles.textState}
                        placeholder={'N°'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(number)=>this.setState({number})}
                        value={this.state.number}
                    />
                </View>
                <TextInput 
                        style={styles.textName}
                        placeholder={'Celular'}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='black'
                        onChangeText={(cel)=>this.setState({cel})}
                        value={this.state.cel}
                />

                <View>
                    
                <TouchableOpacity style={styles.loginButton} onPress={() => this.register}>
                    <Text style={styles.RegisterText}>Salvar</Text>
                </TouchableOpacity>
                </View>
            </View>
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
    cityAndState:{
        flexDirection: "row",
    },
    textName:{
        marginVertical: 5,
        height: 40,
        width: 250,
        borderWidth:1,
        borderColor: 'transparent',
        borderBottomColor: 'rgba(0,0,0,1)',
        color: 'rgba(0,0,0,1)',
    },
    textState:{
        marginVertical: 10,
        height: 40,
        width: 50,
        borderWidth:1,
        borderColor: 'transparent',
        borderBottomColor: 'rgba(0,0,0,1)',
        color: 'rgba(0,0,0,1)',
    },
    textCity:{
        marginVertical: 10,
        height: 40,
        width: 200,
        borderWidth:1,
        borderColor: 'transparent',
        borderBottomColor: 'rgba(0,0,0,1)',
        color: 'rgba(0,0,0,1)',
    },
    touchableStyle:{
        marginTop:10,
        width: 250,
        height: 35,
        color: 'rgba(0,0,0,1)',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picRG:{
        color: 'rgba(0,0,0,1)',
    },
    loginButton:{
        marginVertical: 10,
        borderRadius: 90,
        width: 250,
        height: 40,
        backgroundColor: "#D98F37",
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        borderRadius: 90,
        width: 250,
        height: 40,
        backgroundColor: 'rgba(0,0,0,1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    RegisterText:{
        color: 'rgba(255,255,255,1)',
    }
});

export default ProfileNavigator;