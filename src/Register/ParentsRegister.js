import React, { useState } from "react"
import {db} from "../Firebase/firebase";
import { StyleSheet,View,Text} from 'react-native';
import { Button } from "react-native";

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber , setPhonenumber] = useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit =(e) => {
        e.preventDefault();
        setLoader(true)
        db.collection("Parents")
        .add({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            phonenubber: phonenumber,
        })
        .then(()=> {alert(
            'Your account has been submiited');
             setLoader(false) 
           
    })
    .catch(error => {
        alert (error.message); 
        setLoader(true) 
    });
    setName("");
    setlastName("");
    setEmail("");
    setPassword("");
    setPhonenumber("");
};

 return(

    
     <form  style={{height:'100%',backgroundColor:'white'}}onSubmit={handleSubmit}>
           <View style={styles.header}>
     <Text style={styles.textheader}>Register</Text>
     </View>
        <View style={styles.input}>
        <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Name</label>
        <input placeholder="Name"
        value = {name}
        onChange={(e)=> setName(e.target.value)}
        style={{marginTop: 10, borderRadius: 10,
          height: 40,
          width:'100%',
          borderColor: '#686869',
          fontSize: 15,
         }}/>
        </View>
        <View style={styles.input}>
        <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Last Name</label>
        <input placeholder="Last Name"
        value = {lastName}
        onChange={(e)=> setlastName(e.target.value)}
        style={{marginTop: 10, borderRadius: 10,
          height: 40,
          width:'100%',
          borderColor: '#686869',
          fontSize: 15,
        }}/>
        </View>

        <View style={styles.input}>
        <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Email</label>
        <input placeholder="Email"
        value = {email}
        onChange={(e)=> setEmail(e.target.value)}
        style={{marginTop: 10, borderRadius: 10,
          height: 40,
          width:'100%',
          borderColor: '#686869',
          fontSize: 15}}/>
      </View>

      <View style={styles.input}>
        <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Password</label>
        <input placeholder="Password" 
        value = {password}
        onChange={(e)=> setPassword(e.target.value)}
        style={{marginTop: 10, borderRadius: 10,
          height: 40,
          width:'100%',
          borderColor:'#686869',
          fontSize: 15}}/>
       </View>
       <View style={styles.input}>
        <label style={{color: '#A4A4A4',fontWeight: 'bold',fontSize: 18}}>Phone Number</label>
        <input placeholder="Phone number"
        value = {phonenumber}
        onChange={(e)=> setPhonenumber(e.target.value)}
        style={{marginTop: 10, borderRadius: 10,
          height: 40,
          width:'100%',
          borderColor: '#686869',
          fontSize: 15,
         }}/>
        </View>
       
       <View style={styles.input}>
        <button title="Signin" type="Submit"
         style={{backgroundColor: '#0197b1',
         borderRadius: 30,
         borderColor:'white',
         width: '100%',
         height: 50,
         fontSize:20,
         color: 'white'}} >Sign Up</button>
        </View>
       
        </form>
       
        
 );
};

const styles=StyleSheet.create({

  ViewStyle:
  {
      flex:1,
      padding:20,
      flex: 1, 
      backgroundColor: '#FFFFF'
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
      paddingBottom: 40,
      backgroundColor: '#0db5ab',
      borderBottomEndRadius: 20,
      height:'30%',
      width: '100%'
    },
    textheader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    input:{
        marginTop: 15,
       
        marginLeft: 20,
        marginRight: 20
    },
    form:{
      backgroundColor: '#FFFFFFF'
    }
});

export default Register