import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialcommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View>
        <TextInput placeholder='rechercher' placeholderTextColor={'#131d1a'}/>
        {/* <Icon name=''/> */}
        </View> 
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#131d1a'
  }
})