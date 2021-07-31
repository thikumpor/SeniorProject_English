
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity} from 'react-native';
import {Input,Icon} from 'react-native-elements'

export default class StudentInsert extends Component {
       
        render(){
        return (
      
                
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
                <Text style={styles.textheader}>Parent Login</Text>
            </View>
            <View style={styles.footer}>
            <View style={styles.input}>
            <Input
              placeholder='Input your email'
                label="Email"
                    />
         
      
         <Input
         placeholder='Input your password'
                label="Password"
        />
          <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      
        </View>
            </View>
                </View>
              
        );
        }
}

const styles=StyleSheet.create({

    ViewStyle:
    {
        flex:1,
        padding:20,
        flex: 1, 
        backgroundColor: '#6ad3ed'
    },
    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#DDDAD9',
        marginBottom:20,
        fontSize: 20
      
    
    },
 
      button: {
        marginBottom: 30,
        width: 260,
        height:60,
        alignItems: 'center',
        backgroundColor: '#6cc9bf',
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginTop: 20
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
      },
      footer:
      {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 40
       
      },
      header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40
      },
      textheader: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 30
      },
      input:{
          marginTop: 15
      }
});