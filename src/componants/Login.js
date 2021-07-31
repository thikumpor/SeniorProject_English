import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../Firebase/firebase'
import { StyleSheet, View,Text} from 'react-native';

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#0db5ab'}}>
        
            <View style={styles.header}>
                <Text style={styles.textheader}>Students Login</Text>
            </View>

         
            <View style={styles.footer}>
            <View style={styles.input}>
            <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Email</label>
                <input
              placeholder='Input your email'
                label="Email"
                type="email" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp"
                style={{marginTop: 20, borderRadius: 10,
                    height: 40,
                    width:'100%',
                    borderColor: '#686869',
                    fontSize: 15}} />
                     <label style={{marginTop: 20,color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Password</label>
                <input
                placeholder='Input your password'
                label="Password"
                type="password" 
                name="password"
                id="exampleInputPassword1"
                style={{marginTop: 10, borderRadius: 10,
                    height: 40,
                    width:'100%',
                    borderColor: '#686869',
                    fontSize: 15}} />
            <button type="submit" className="btn btn-primary"
                style={{backgroundColor: '#0197b1',
                borderRadius: 30,
                borderColor:'white',
                width: '100%',
                height: 50,
                fontSize:20,
                color: 'white',
                marginTop: 20}}>Sign in</button>
            </View>
            </View>
            
           
            </form>
          
        
        
        
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
          fontSize: 30,
          textAlign: 'center'
         
      },
      input:{
          marginTop: 15
      }
});

export default LogIn;