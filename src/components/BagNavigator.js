import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import addCreditCard from './addCreditCard';

class BagNavigator extends Component{

    render(){
        return(
            <View>
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{color:"#D98F37", marginVertical:10}}>Carteira</Text>
                    <View style={{width:400, height:200, backgroundColor:"#D98F37", alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'rgba(255,255,255,1)'}}>Total</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{color:'rgba(255,255,255,1)'}}>R$</Text>
                            <Text style={{flexDirection: "row", fontSize:64, color:'rgba(255,255,255,1)'}}>40,00</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{marginTop:30, marginLeft:50}}>Cartões</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:20, marginLeft:70}}>****.****.****.8213</Text>
                        <TouchableOpacity style={{marginTop:10,marginLeft:70, width:30, height:30, borderRadius:90, backgroundColor:"#32db23", alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'rgba(255,255,255,1)'}}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:10,marginLeft:10, width:30, height:30, borderRadius:90, backgroundColor:"#db2323", alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'rgba(255,255,255,1)'}}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{marginTop:100,marginLeft:80, width:200, height:50, borderRadius:90, backgroundColor:"#32db23", alignItems:'center', justifyContent:'center'}}
                onPress={()=>{
                    this.props.navigation.navigate('addCredit');
                }}>
                            <Text style={{color:'rgba(255,255,255,1)'}}>Adicionar Cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:10,marginLeft:80, width:200, height:50, borderRadius:90, backgroundColor:"#D98F37", alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'rgba(255,255,255,1)'}}>Adicionar por boleto</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const AppNavigator = createStackNavigator({
    addCredit: {
      screen: addCreditCard
    }
  });


const AppContainer = createAppContainer(AppNavigator);//I STOPED HERE

export default BagNavigator;