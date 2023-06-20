import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Button extends Component {

    static defaultprops = {
        onPress: function () { },
        title: "",
        color: "white",
        backgroundColor: "black",
    }
    render() {
        var bc = this.props.backgroundColor;
        var br = this.props.borderRadius;
        return (
            <TouchableOpacity style={[styles.CalcBtn, { backgroundColor: bc, borderRadius: br }]} onPress={this.props.onPress}>
                <Text style={[styles.valueTxt, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    CalcBtn: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    // CalcBtn: {
    //     width: 80,
    //     height: 80,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor:'',
    // },
    valueTxt: {
        fontSize: 30,
        // fontWeight: 'bold'
    },
    main:{
        flex:1,
       backgroundColor:'#3e403f',
       justifyContent :'flex-end',
        alignItem:'center',
        paddingBottom: 20,
        gap:10,
    
      },
      screen:{
      width:'100%',
      height:200,
      color:"grey",
      textAlign:"right",
      fontSize:35,
      },
      button_row:{
        flexDirection:'row',
        // buttonRadius:'100',
        gap:10,
        width:'90%',
    
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
      separator:{
        borderwidth:0.5,
        borderColor:'black',
        margin:10,
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
      DispContainer: {
        padding: 20
    },
    displayText: {
        fontSize: 70,
        color: '#878787',
        textAlign: 'right'
    },
    buttonRow: {
        justifyContent: 'space-between'
    },
    buttonColumnLast: {
        justifyContent: 'space-between',
        backgroundColor: "#363636",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
})