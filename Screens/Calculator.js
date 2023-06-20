import {  Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../misc/Button'

const Calculator = () => {
    const [value, setValue] = useState('0');
    const [showWarning, SetshowWarning] = useState(false);

    const onDigitPress = (val) => {
        if (val == 'C') {
            setValue('0')
        }
        else if (value == '1+3+9') {
            SetshowWarning(true);
        }
        else {
            if (value == '0') {
                setValue(val)
            }
            else {
                setValue(value + val)
            }
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Modal
                visible={showWarning}
                transparent
                onRequestClose={() =>
                    SetshowWarning(false)
                }
                animationType='fade'
                hardwareAccelerated>
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                            <Text style={styles.warnText}>Hello-world.</Text>
                    </View>
                </View>
            </Modal>

            
            <View style={styles.displayContainer}>
                <View style={styles.DispContainer}>
                    <Text style={styles.displayTxt}>{value}</Text>
                </View>
            </View>

           
            <View style={{
             width: '85%',
             height: 1,
             backgroundColor: 'black',
             marginBottom: 20,
             alignSelf: 'center'
                }} />

            
            <View style={{ 
                paddingHorizontal: 20,
                marginBottom: 40,
                flexDirection: 'row', 
                justifyContent: 'space-between'
                 }}>
                <View style={styles.buttonRow}>
                    <Button onPress={() => onDigitPress('C')} title="C" color="black" />
                    <Button onPress={() => onDigitPress('7')} title="7" color="black" />
                    <Button onPress={() => onDigitPress('4')} title="4" color="black" />
                    <Button onPress={() => onDigitPress('1')} title="1" color="black" />
                    <Button onPress={() => onDigitPress('.')} title="." color="black" />
                </View>
                <View style={styles.buttonRow}>
                    <Button onPress={() => onDigitPress('+/-')} title="+/-" color="black" />
                    <Button onPress={() => onDigitPress('8')} title="8" color="black" />
                    <Button onPress={() => onDigitPress('5')} title="5" color="black" />
                    <Button onPress={() => onDigitPress('2')} title="2" color="black" />
                    <Button onPress={() => onDigitPress('0')} title="0" color="black" />
                </View>
                <View style={styles.buttonRow}>
                    <Button onPress={() => onDigitPress('%')} title="%" color="black" />
                    <Button onPress={() => onDigitPress('9')} title="9" color="black"  />
                    <Button onPress={() => onDigitPress('6')} title="6" color="black"  />
                    <Button onPress={() => onDigitPress('3')} title="3" color="black" />
                    <Button onPress={() => onDigitPress('00')} title="00" color="black" />
                </View>
                <View style={styles.buttonColumnLast}>
                    <Button onPress={() => onDigitPress('/')} title="/" color="#5b5d5c" />
                    <Button onPress={() => onDigitPress('x')} title="x" color="#5b5d5c"  />
                    <Button onPress={() => onDigitPress('-')} title="-" color="#5b5d5c"  />
                    <Button onPress={() => onDigitPress('+')} title="+" color="#5b5d5c"  />
                    <Button onPress={() => onDigitPress('=')} title="=" color="#5b5d5c"
                        backgroundColor="orange"
                        borderRadius={40}
                    />
                </View>
            </View>

        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e403f',
        paddingTop: 50
    },
    DispContainer: {
        padding: 20
    },
    displayTxt: {
        fontSize: 70,
        color: '#878787',
        textAlign: 'right'
    },
    buttonRow: {
        justifyContent: 'space-between',
        
        

    },
    buttonColumnLast: {
        justifyContent: 'space-between',
        
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e403f99'
      },
    warning_modal: {
        width: 300,
        height: 350,
        backgroundColor: '#9c9e9d',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      warnText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '300'
      },
      yellow_button:{
        flex:1,
        height:80,
        borderRadius:50,
        backgroundColor:'#363636',
        justifyContent :'center',
        alignItem:'center',
    
      },
      button_Text:{
        color:'black',
        fontSize:35,
        textAlign:'center',
        justifyContent:'center',
    
      },
      back_button:{
        flex:2,
        height:80,
        borderRadius:50,
        backgroundColor:'#363636',
        justifyContent :'center',
        alignItem:'center',
      },
      equal_button:{
        flex:1,
        height:80,
        borderRadius:50,
        backgroundColor:'orange',
        justifyContent :'center',
        alignItem:'center',
      },
      other_button:{
        flex:1,
        height:80,
        borderRadius:50,
        backgroundColor:'#8d8e8e',
        justifyContent :'center',
        alignItem:'center',
      },
      number_button:{
        flex:1,
        height:80,
        borderRadius:50,
        backgroundColor:'#009bbd',
        justifyContent :'center',
        alignItem:'center',
      },
      bg:{
        backgroundColor:'grey',
        borderRadius: '40',

      }
})