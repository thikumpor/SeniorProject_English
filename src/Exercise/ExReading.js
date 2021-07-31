import React from 'react';
import { StyleSheet, Text, View,Button,FlatList,Image} from 'react-native';

function Reading ({}) {
    return (
     
        <View style={styles.ViewStyle}>
            <View style={styles.header}>
            
                <Text style={styles.textheader}>Exercise</Text>
            </View>
            <View style={styles.footer}>
            <View style={{marginTop : 20}}>
       <Text>Talar and Steve, a financial planning company based in Lakeview, has opened a branch office in downtown Salem in the building owned by the Salem Office Properties real estate company. 
         Talar and Steve is taking over office space formerly occupied by the law offices of Lay Lawson. The space had been vacant for a year and a half. The new Talar and Steve office was open for business as of yesterday.
          Talar Ormond, president of Talar and Steve, says that her company chose the Salem location because of a rising demand for financial planning services in the area. "Salem is a growing community," she explained, " and the town's citizens are becoming more affluent. 
          It is just the type of community where services such as ours are needed." </Text>
       </View>
       <View style={{marginTop : 20}}>
       <Text>What kind of a business is Talar and Steve.</Text>
       <View style={{marginTop : 10}}><Button title="a.Financial planning"  
            color="#469EF9" /></View> </View>

           
<View style={{marginTop : 10}}> <Button title="b.Law office" 
            color="#469EF9" /> </View>

<View style={{marginTop : 10}}><Button title="c.Real estate" 
            color="#469EF9" /> </View>

<View style={{marginTop : 10}}><Button title="d.Stock brokerage" 
            color="#469EF9" /> </View>
     </View>
     <View style ={{flexDirection :'row',marginTop : 300}}>
       <View style ={{marginRight :200 }}><Button title="Back" 
            color="#666666" /></View> 

             <View ><Button title="Next" 
            color="#666666" /></View> </View>
     
     </View> 
    



        
     
  );
}

const styles = StyleSheet.create({
  regisP: {
   flex: 1,
   justifycontent: 'space-around',
   flexDirection: 'row',
   marginTop: '80px',
   position: 'center',

  },

  lesson: {
    flex: 1,
    justifycontent: 'space-around',
    flexDirection: 'row',
    width:'150',
    height: '120px',
    marginTop: '80px',
  },
  score: {
   flex: 50,
   justifycontent: 'space-around',
   flexDirection: 'row',
   width:'150',
   height: '120px',
   marginTop: '80px',
  },

  tinyLogo : {
    width : 300,
    height : 300,
  },
  Image : {
    width : 300,
    height : 300,

  } ,
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
        backgroundColor: '#04B486',
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
export default Reading;
