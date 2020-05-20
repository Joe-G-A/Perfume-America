import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <Image source={{uri:'https://codehs.com/uploads/e5f69c718a6d730f94e03c0f06c1c9af'}}
style={{height:110, width: 110, margin: 5,}}/>

        <Text style={styles.title}>
       Perfume America 
        
        </Text>
       
        <Text style={styles.info}>
      Perfume America, find you mom the perfect perfume
        </Text>

<Text style={styles.info}>
        **Full Disclaimer:
Click on the options given and we will get you the perfect perfume. 
   </Text>





   
       

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Color')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          BEGIN
                        </Text>
                    </View>
                </TouchableHighlight>
                
            </View>

 

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
    }
});


export default Homescreen;
