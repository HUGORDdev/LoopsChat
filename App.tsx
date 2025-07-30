import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './src/screen/Router'

const App = () => {
  return (
    // <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>
    //   <Text>hello word</Text>
    // </View>
    <NavigationContainer>
    {/* <Discover/> */}
    <Navigation/>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})