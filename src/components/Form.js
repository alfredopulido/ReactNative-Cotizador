import React,{useState,useEffect} from 'react';
import {StyleSheet,TextInput,View} from 'react-native';
import {Picker} from '@react-native-community/picker';

import colors from '../utils/colors';



export default function Form(props){
    const {setCapital,setInterest,setMonths} = props;
    const [selectedValue, setSelectedValue] = useState("3");

    useEffect(()=>{
        setMonths(selectedValue)
      },[selectedValue])


    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput style={styles.input} placeholder="Cantidad a pedir" keyboardType="numeric" onChange={(e)=>setCapital(e.nativeEvent.text)}/>
                <TextInput style={[styles.input,styles.inputPercentage]} placeholder="Interes" keyboardType="numeric" onChange={(e)=>setInterest(e.nativeEvent.text)} />
                
            </View>
            <View style={styles.selectPicker}>
                <Picker selectedValue={selectedValue} 
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedValue(itemValue);
                            
                        }}>
                        <Picker.Item label="3 meses" value="3" />
                        <Picker.Item label="6 meses" value="6" />
                        <Picker.Item label="9 meses" value="9" />
                        <Picker.Item label="12 meses" value="12" />
                        
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position:"absolute",
        bottom:0,
        width:"85%",
        paddingHorizontal:50,
        backgroundColor:colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:"center"
    },
    viewInputs:{
        flexDirection:"row"
    },
    input:{
        height:50,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:"60%",
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        color:"#000",
        paddingHorizontal:20
    },
    inputPercentage:{
        width:"40%",
        marginLeft:5
    },
    selectPicker:{
        height:50,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:"105%",
        marginBottom:10,
        color:"#000",
        marginLeft:-5,
    }
})
