import { View, Text } from 'react-native'
import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [button3Dias,setButton3Dias] = useState(true)
    const [button5Dias,setButton5Dias] = useState(false)
    const [button10Dias,setButton10Dias] = useState(false)
    const [button15Dias,setButton15Dias] = useState(false)

    const [valorMoeda, setValorMoeda] = useState()

    function button3Ativar(){
      setApiGet(3+1)
        setButton3Dias(true)
        setButton5Dias(false),setButton10Dias(false),setButton15Dias(false)
    }
    function button5Ativar(){
      setApiGet(5+1)
      setButton5Dias(true)
      setButton3Dias(false),setButton10Dias(false),setButton15Dias(false)
    }
    function button10Ativar(){
      setApiGet(10+1)
      setButton10Dias(true)
      setButton3Dias(false),setButton5Dias(false),setButton15Dias(false)
    }
    function button15Ativar(){
      setApiGet(15+1)
      setButton15Dias(true)
      setButton3Dias(false),setButton5Dias(false),setButton10Dias(false)
    }

    const [apiGet, setApiGet] = useState(3+1)
    const [apiResponse, setApiResponse] = useState()

    console.log('apiResponse =', apiResponse)
    console.log('apiGet', apiGet)

      const api = axios.create({
        baseURL:'https://economia.awesomeapi.com.br/json/daily/USD-BRL/'
      })

      useEffect(() => {
        async function myApi() {
        const response = await api.get(`${apiGet}`);
        console.log('response', response.data)
        setApiResponse(response.data)
        }
        myApi()
      },[apiGet])
    
  return (
    <AuthContext.Provider 
    value={{apiResponse,apiGet,
    button3Ativar,button5Ativar,
    button10Ativar,button15Ativar,
    button3Dias,button5Dias,
    button10Dias,button15Dias,valorMoeda, setValorMoeda}}>
      {children}
    </AuthContext.Provider>
  )
}