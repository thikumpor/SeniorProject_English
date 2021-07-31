import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity,SafeAreaView} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";


export default class StudentInsert extends Component {
       
        render(){
        return (
      
                
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Reading</Text>
            
            <View>
                 <SafeAreaView style={[styles.container]}>
                 
                 <YoutubePlayer   width={300} height={200}   videoId={"juKd26qkNAw"} />
                 </SafeAreaView>
                 </View>
                 </View>
                 <View style={{flex:1,marginTop: 10}}>
                     <Text style={styles.textP}>แต่ในบางครั้ง car อ่านว่า คาร์  cell อ่านว่า เซล์  หรือ put อ่านว่า พุท
                      แต่ but อ่านว่า บัท ซึ่งทำให้ผู้เรียนอย่างเราสับสนเป็นอย่างมากว่าตกลงแล้ว อะไร อ่านเป็นอะไรกันแน่ 
                       ดังนั้นบทเรียนนี้ จะพาทุกๆคน มาทำความรู้จักกับระบบเสียงขั้นพื้นฐานของภาษาอังกฤษกันค่ะ ซึ่งก่อนอื่น เราจะต้องมาทำความรู้จัก 
                       symbols ของเสียงต่างๆก่อนค่ะ สิ่งสิ่งนี้เราจะเรียกมันว่า Phonetic Symbols ค่ะ ซึ่งการรู้ว่าเสียงแต่ละเสียงมีหน้าตาเป็นอย่างไรนั้น
                        จะช่วยให้เราแยกออก และสามารถออกเสียงได้ถูกต้องค่ะ จะแบ่งออกเป็นสองหัวข้อใหญ่ๆ คือ ระบบเสียงของพยัญชนะ (Consonants) 
                         และ ระบบเสียงของสระ (Vowels) ค่ะ
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
        backgroundColor: '#2495c6',
        borderBottomEndRadius: 20,
        height: '50',
        width: '100%',
        position: 'fix'

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