import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Ionicons} from "@expo/vector-icons";

/*Eksporterer komponent til TabNavigator i App.js*/
export default class NewScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, padding:10}}>Sælg dine egne DIY-møbler</Text>
                <Ionicons name="ios-heart-empty" size={40} color="black" />
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