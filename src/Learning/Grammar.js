
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity,SafeAreaView} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";


export default class StudentInsert extends Component {
       
        render(){
        return (
      
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Grammar</Text>
            
            <View>
                 <SafeAreaView style={[styles.container]}>
                 
                 <YoutubePlayer   width={300} height={200}   videoId={"juKd26qkNAw"} />
                 </SafeAreaView>
                 </View>
                 </View>
                 <View style={{flex:1,marginTop: 10}}>
                     <Text style={styles.textP}>โดยพื้นฐานแล้ว พยัญชนะในภาษาอังกฤษมี 26 ตัว 
                        ได้แก่ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        และสระในภาษาอังกฤษ มี 6 ตัว
                        ได้แก่ a e i o u y 
                    </Text>
                 </View>
            </View>
            
           );
        }
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
        paddingHorizontal: 15,
        paddingVertical: 30,
        
       
       
      },
      header:{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: '#0db5ab',
        borderBottomEndRadius: 20,
       
   

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