import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

import AuthProvider from './src/contexts/AuthProvider'
import ContainerGradiente from './src/components/ContainerGradiente'
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationList'
import QuotationsItems from './src/components/QuotationsItems'

export default function App() {

  // API PARA SER USADO https://economia.awesomeapi.com.br/json/daily/USD-BRL/5
  // O ULTIMO NUMERO É QUANTOS DIAS ATRÁS
  // SITE GERAL COM TODAS AS API DE MOEDA https://docs.awesomeapi.com.br/api-de-moedas

  //API BITCOIN CORRETO 
  // https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05

  return (
    <AuthProvider>
      <ContainerGradiente>
        <View style={styles.containerApp}>
          <StatusBar
          backgroundColor="#f50d41"
          barStyle='light-content'
          />
          <CurrentPrice/>
          <HistoryGraphic/>
          <QuotationList/>
          <QuotationsItems/>
        </View>
      </ContainerGradiente>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})