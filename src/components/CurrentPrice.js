import { View, Text, StyleSheet,FlatList  } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import moment from 'moment'

export default function CurrentPrice() {

  const {apiResponse} = useContext(AuthContext)

  function moeda(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    } 

  return (
    <View style={styles.headerPrice}>
      <FlatList
         data={apiResponse}
         keyExtractor={({id})=>id}
         renderItem={({item, index, separators})=>{
          return( 
            <View>
                 <Text style={styles.currentPrice}>{moeda(Number(item.ask))}</Text>
                <Text style={styles.textPrice}>{moment().format('DD[/]MM[/]YYYY')}</Text>
          </View>
          )}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerPrice: {
    marginTop:80,
    height:60,
  },
  currentPrice:{
    fontSize:32,
    fontWeight:'bold',
    color:'#fff'
  },
  textPrice:{
    fontSize:16,
    color:'#fff'
  }
})