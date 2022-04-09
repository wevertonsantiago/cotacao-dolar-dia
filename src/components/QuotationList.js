import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function QuotationList() {

  const {button3Ativar,button5Ativar,button10Ativar,button15Ativar,
    button3Dias,button5Dias,button10Dias,button15Dias} = useContext(AuthContext)

  console.log('button3Dias', button3Dias)
  console.log('button5Dias', button5Dias)
  console.log('button10Dias', button10Dias)
  console.log('button15Dias', button15Dias)

  return (
    <View>
      <View style={styles.filters}>
      <TouchableOpacity
          style={button3Dias ? styles.buttonQueryAtivo : styles.buttonQuery }
          onPress ={button3Ativar}>
          <Text style={button3Dias ? styles.textButtonQueryAtivo : styles.textButtonQuery}>3 Dias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={button5Dias ? styles.buttonQueryAtivo : styles.buttonQuery}
          onPress ={button5Ativar}>
          <Text style={button5Dias ? styles.textButtonQueryAtivo : styles.textButtonQuery}>5 Dias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={button10Dias ? styles.buttonQueryAtivo : styles.buttonQuery}
          onPress ={ button10Ativar}>
          <Text style={button10Dias ? styles.textButtonQueryAtivo : styles.textButtonQuery}>10 Dias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={button15Dias ? styles.buttonQueryAtivo : styles.buttonQuery}
          onPress ={button15Ativar}>
          <Text style={button15Dias ? styles.textButtonQueryAtivo : styles.textButtonQuery}>15 Dias</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  filters: {
    width:'100%',
    flexDirection:'row',
    paddingVertical:15,
    justifyContent:'space-evenly'
  },
  buttonQuery: {
    width:70,
    height:30,
    borderRadius:50,
    alignItems:'center',
    padding:5.5,
    backgroundColor:'#CCC'
  },

  buttonQueryAtivo: {
    width:70,
    height:30,
    borderRadius:50,
    alignItems:'center',
    padding:5.5,
    backgroundColor:'#232323',
  },

  textButtonQuery:{
    color:'#000',
    fontSize:14,
    height:30,
  },

  textButtonQueryAtivo:{
    color:'#CCC',
    fontSize:14,
    height:30,
  },
})