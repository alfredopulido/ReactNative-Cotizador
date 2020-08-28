import React, { useState , useEffect} from 'react';
import {StyleSheet,View, Text, SafeAreaView,StatusBar, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer'
import Result from './src/components/ResultCalculation'
import colors from './src/utils/colors';

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] =useState(null);
  const [months, setMonths] = useState(null);
  const [total,setTotal] =useState(null)
  const [errorMessage,setErrorMessage] = useState('');
  
  const calculate = () => {
    reset();
    if (!capital){ setErrorMessage("Añade la cantidad que quieres solicitar")}
    else if (!interest){
      setErrorMessage("El interes esta vacio")
    }
    else if (!months){
      setErrorMessage("Selecciona los meses a pagar")
    } else {
      
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal ({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee*months).toFixed(2)
      }) 
    }
  }

  useEffect(()=>{
    if (capital && interest && months)
      calculate()
    else
      reset()
  },[capital,interest,months])

  const reset = () => {
    setErrorMessage(''),
    setTotal(null)
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>  
        <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}></Form>
      </SafeAreaView>

      <Result errorMessage={errorMessage} capital={capital} interest={interest} months={months} total={total}></Result>

      <Footer calculate={calculate}></Footer>
      
    </>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    height:290,
    
    alignItems:"center"
  },
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color:"#ffffff",
    marginTop:15
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    zIndex:-1,
    position:'absolute'
  }
})