import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image, TouchableHighlight, ImageBackground,} from 'react-native';



class Perfume extends React.Component {

render() {
return (

<View style={styles.container}>

<Text style={styles.title}>
Choose the options for your mom 
</Text>






<View style={styles.center}>
<Image source={{uri:'https://www.cleanpng.com/png-perfume-bottle-blue-eau-de-cologne-ralph-lauren-co-913345/'}}
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://i.pinihttps://img.perfume.com/images/products/parent/medium/565w.jpgmg.com/236x/1e/94/94/1e949491d6bda02abc839f13b900c297.jpg'}}
style={{height:110, width: 110, margin: 5,}}/>


<Image source={{uri:'https://fimgs.net/mdimg/perfume/375x500.46149.jpg'}}
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://cdn.pixabay.chttps://a.cdnsbn.com/images/products/24126533706.jpgom/photo/2018/03/02/09/19/flower-marigolds-3192686_960_720.png'}}
style={{height:110, width: 110, margin: 5,}}/>
</View>




<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Smell')}>
<Text style={styles.buttonText}>
NEXT
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
}

});
export default Perfume;
