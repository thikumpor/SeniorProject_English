import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity,SafeAreaView} from 'react-native';



const Learning = () =>  {
       
    
        return (
      
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Score</Text>
            </View>
            <View style={styles.footer}>
            
               
            <Text style={{fontSize: 20}}>Your score is 6</Text>
            </View>
                </View>
                
                
            
            
          
           );
        
}

const styles=StyleSheet.create({

    ViewStyle:
    {
        flex:1,
        backgroundColor: '#FFFFFF',
      
    },
    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#DDDAD9',
        marginBottom:20,
        fontSize: 20
      
    
    },
 
      button: {
        marginBottom: 10,
        width: 290,
        height:80,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#FFFFFF',
        borderWidth: 1,
      
     
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
        paddingHorizontal: 30,
        paddingVertical: 30,
        alignItems: 'center'
        
       
       
      },
      header:{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: '#01A9DB',
        borderBottomEndRadius: 20,
        height: '20',
        width: '100%',
        justifyContent: 'flex-end'
        

      },
      textheader: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 40
      },
      input:{
          marginTop: 15
      },
      Logcard:{
          height: 20
      },
      container: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center'
       
      },
      textP:{
          padding: 20,
          fontSize: 16,
          fontFamily: "Kanit-Light"
          
      }
});
export default Learning;