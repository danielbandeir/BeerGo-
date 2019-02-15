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

        <Text style={styles.nameText2}>Carteira: R$40,00</Text>
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
    top: 50,
    borderRadius: 180,
    backgroundColor: 'rgba(212,134,213,1)',
    position: 'absolute',
  },
  midStyle:{
    top:70,
    alignItems:'center',
    justifyContent:'center',
  },
  nameText:{
    fontSize: 24,
  },
  nameText2:{
    top:50,
    fontSize: 24,
  },
  buttonPeca:{
    top:20,
    width:200,
    height:40,
    borderRadius:90,
    backgroundColor: "#D98F37",
    alignItems:'center',
    justifyContent:'center',
  },
  pecaText:{
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
