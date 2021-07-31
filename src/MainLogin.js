
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './componants/Auth'
import {StyleSheet,View,Text} from 'react-native'

const MainLogin = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
           
            <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Welcome to </Text>
                <Text style={styles.textheader}> EngTopia </Text>
               </View>
          
           
                {currentUser ? (
                    <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
                ) : (
                      <Text>
                        <p><Link to="/login" className="btn btn-primary">Log In</Link> 
                           or
                      
                         <Link to="/signup" className="btn btn-success">Sign Up</Link></p>
                         </Text>
                     
                   
                )}
                </View>
           
        </>
    )
}
const styles=StyleSheet.create({

  ViewStyle:
  {
      flex:1,
      padding:20,
      backgroundColor: '#0db5ab'
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
      justifyContent: 'Center',
      paddingHorizontal: 20,
      paddingBottom: 40,
      marginTop: 40

    },
    textheader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center'
       
    },
    input:{
        marginTop: 15
    }
});
export default MainLogin;