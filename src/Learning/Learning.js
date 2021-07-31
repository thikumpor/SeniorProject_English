import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity,SafeAreaView} from 'react-native';



const Learning = ({history}) =>  {
       
    
        return (
      
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Learning</Text>
            </View>
            <View style={styles.footer}>
            
            <TouchableOpacity onPress={() =>history.push("/Grammar")}>
             
          <View style={{
              marginTop: 30,
              marginBottom: 10,
              width: 290,
              height:80,
              alignItems: 'center',
              borderRadius: 15,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              backgroundColor:'#0db5ab'}}>
            <Text style={styles.buttonText}>Grammar</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>history.push("/Reading")}>
          <View style={{
              marginBottom: 10,
              width: 290,
              height:80,
              alignItems: 'center',
              borderRadius: 15,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              backgroundColor:'#2495c6'}}>
                  
            <Text style={styles.buttonText}>Reading</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>history.push("/Vocabulary")}>
          <View style={{
              marginBottom: 10,
              width: 290,
              height:80,
              alignItems: 'center',
              borderRadius: 15,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              backgroundColor:'#6ad3ed'}}>
            <Text style={styles.buttonText}>Vocabulary</Text>
          </View>
        </TouchableOpacity>
           
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
        backgroundColor: '#58D9BB',
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