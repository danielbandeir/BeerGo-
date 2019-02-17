import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ProfileNavigator from './ProfileNavigator';
import BagNavigator from './BagNavigator';
import MapsNavigator from './MapsNavigator';

class dashboard extends Component {
  render() {
    return (
    <View>
      <View style={styles.dashInit}>
        <View style={styles.dashboardTop}></View>
        <View style={styles.dashboardMid}></View>
      </View>

      <View style={styles.midStyle}>
        <Text style={styles.nameText}>Daniel Bandeira</Text>
        <TouchableOpacity style={styles.buttonPeca}>
          <Text style={styles.pecaText}>Peça uma cerveja</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', top:50}}>
        <Text style={{color:"#D98F37"}}>Carteira: </Text><Text style={styles.nameText2}>R$40,00</Text>
        </View>
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  dashInit:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardTop:{
    width:400,
    height:200,
    backgroundColor: "#D98F37",
  },
  dashboardMid:{
    width: 200,
    height: 200,
    top: 100,
    borderRadius: 180,
    backgroundColor: 'rgba(212,134,213,1)',
    position: 'absolute',
  },
  midStyle:{
    top:120,
    alignItems:'center',
    justifyContent:'center',
  },
  nameText:{
    fontSize: 24,
  },
  nameText2:{
    fontSize: 42,
    color:"#D98F37",
  },
  buttonPeca:{
    top:20,
    width:250,
    height:60,
    borderRadius:90,
    backgroundColor: "#D98F37",
    alignItems:'center',
    justifyContent:'center',
  },
  pecaText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
  }

});

const TabNavigator = createBottomTabNavigator({
  Início: dashboard,
  Perfil: ProfileNavigator,
  Carteira: BagNavigator,
  Mapa: MapsNavigator,
});

export default createAppContainer(TabNavigator);
