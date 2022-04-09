import { View, StyleSheet, Dimensions} from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import moment from 'moment';

import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic() {

  const {apiResponse} = useContext(AuthContext)

// num = [3, 8, 11, 7, 5];
// const num2x = num.map((n) => n * 2);

const mapDias = apiResponse.map((item,index) =>  moment().subtract(index, 'days').format('DD') );
const mapApi = apiResponse.map((n) => Number(n.ask) );

  return (
    <View style={styles.contentGraphic}>
      <LineChart
    data={{
      labels: mapDias,
      datasets: [
        {
          data: mapApi
        }
      ]
    }}
    width={Dimensions.get("window").width -10} // from react-native
    height={220}
    yAxisLabel="U$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: '#232323',
      backgroundGradientTo: "#404040",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#4c66cf"
      }
    }}
    bezier
    style={{
      marginVertical: -10,
      marginHorizontal: -38,
      // borderRadius: 16
    }}
  />
    </View>
  )
}

const styles = StyleSheet.create({
  contentGraphic: {
    width:'90%',
    height:220,
    // backgroundColor:'#232323',
    marginTop:20,
    borderRadius:20,
    padding:10
  },
})