import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Ionicons} from "@expo/vector-icons";

/* Eksporterer klassen til App.js som pt er tom */
export default class DeliveryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>Se status på dine leveringer</Text>
                <Ionicons name="ios-paper-plane" size={40} color="black" />
            </View>
        )
    }
}

/* Styling */
const styles = StyleSheet.create({

    container: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },

});