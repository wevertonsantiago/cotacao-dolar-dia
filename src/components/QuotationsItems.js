import { View, Text, StyleSheet,Image,ScrollView,FlatList } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import moment from 'moment'

export default function QuotationsItems() {

  const {apiResponse} = useContext(AuthContext)

  function moeda(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    } 

  return (
    <ScrollView>
      <FlatList 
      showsVerticalScrollIndicator={true}
      data={apiResponse}
      keyExtractor={({id}, index)=>id}
      renderItem={({item, index, separators})=>{
               return( <View style={styles.mainContent}>
                  <View style={styles.contextLeft} >
                  <View style={styles.boxLogo}>
                    <Image style={styles.logBitcoin}
                    source={require("../img/dinheiroImage.png")}/>
                    <Text style={{marginLeft:10, fontSize:16}}>{moment().subtract(index, 'days').format('DD[/]MM[/]YYYY')}</Text>
                  </View>
                  </View>
                  <View style={styles.contextRigth}>
                    <Text style={styles.price}>{moeda(Number(item.ask))}</Text>
                </View>
                </View>
               ) 
      }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContent:{
    width:'95%',
    height:'auto',
    backgroundColor:'#fff',
    marginLeft:'3%',
    marginBottom:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  logBitcoin:{
    width:40,
    height:40,
    marginLeft:2,
  },
  boxLogo:{
    flexDirection:'row',
    alignItems:'center',
  },
  contextLeft:{
    width:'36%',
    alignItems:'flex-start',
  },
  contextRigth:{
    width:'60%',
    alignItems:'flex-end'
  },
  price:{
    fontSize:18,
    fontWeight:'bold'
  }
})