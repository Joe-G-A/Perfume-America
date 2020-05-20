import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image, TouchableHighlight, ImageBackground, TouchableOpacity} from 'react-native';



class Color extends React.Component {

render() {
return (

<View style={styles.container}>

<Text style={styles.title}>
Choose the perfect color
</Text>

<View style={styles.center}>







<View style={styles.box1}>

</View>
</TouchableOpacity>
<View style={styles.box2}>


</View>
<View style={styles.center}>
<View style={styles.box3}>

</View>

<View style={styles.box4}>

</View>

</View>




<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Flower')}>
<Text style={styles.buttonText}>
Next option
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

center: {
flexDirection: 'row',
alignItems: 'center',
margin:5,
},
box1: {
  backgroundColor: 'blue',
  height: 100,
  width: 100,
  borderWidth:5,
  borderColor:'black',
  borderRadius:5,
  margin:5,
},

box2:{
  backgroundColor: 'red',
  height: 100,
  width: 100,
  borderWidth:5,
  borderColor:'black',
  borderRadius:5,
},

box3:{
  backgroundColor: 'yellow',
 height: 100,
  width: 100,
  borderWidth:5,
  borderColor:'black',
  borderRadius:5,
  margin:5,
},

box4: {
  backgroundColor: 'purple',
 height: 100,
  width: 100,
  borderWidth:5,
  borderColor:'black',
  borderRadius:5,
},

});
export default Color;
