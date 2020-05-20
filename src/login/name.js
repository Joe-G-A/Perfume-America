import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image, TouchableHighlight, ImageBackground, TextInput} from 'react-native';



class Name extends React.Component {
state={
    username:'',
  }
render() {
return (

<View style={styles.container}>
<Image source={{uri:'https://codehs.com/uploads/e5f69c718a6d730f94e03c0f06c1c9af'}}
style={{height:110, width: 110, margin: 5,}}/>

<Text style={styles.title}>
Name For Mother 
</Text>


<TextInput style={styles.textBar}
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}/>









<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Perfume')}>
<Text style={styles.buttonText}>
Get Perfume
</Text>

</TouchableHighlight>



</View>
);
}
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffeb85',
    justifyContent: 'center',
    alignItems: 'center',
    

  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  title: {
    fontSize: 35,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
     color:'#ff8585',
    
  },
  info:{
    fontSize: 15,
    color:'#ff8585',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

   touchableButton1: {
        backgroundColor: '#ff8585',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    },
textBar:{
    height:30,
    width:200,
    fontSize:10,
    borderColor: 'gray',
    borderWidth:1,
    borderRadius:20,
    margin:10,
  },

});
export default Name;
