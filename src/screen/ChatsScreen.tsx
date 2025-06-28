import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '../constant/imagePath';

  const controllLecture=()=>{}
const ChatsScreen = () => {

  const personneOnline = [
    {
      image: imagePath.personne5,
      name: 'leo'
    },
    {
      image: imagePath.personneProduct,
      name: 'berthe'
    },
    {
      image: imagePath.personne3,
      name: 'luca'
    },
    {
      image: imagePath.personne4,
      name: 'Steve'
    },
    {
      image: imagePath.personne2,
      name: 'jonathan'
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.elements}>
        <View style={styles.section}>
          <Image source={imagePath.personne} style={styles.image} />
          <Text style={styles.title}>Chats</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity>
            <Icon name='account-edit' size={25} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='camera' size={25} style={styles.icon} />
          </TouchableOpacity>
        </View>


      </View>
      <View style={{ flexDirection: 'row', position: 'relative', justifyContent: 'center', marginVertical: 20 }}>
        <Icon name='magnify' size={25} color={'#ccc'} style={{ position: 'absolute', top: 7, zIndex: 1, left: 7 }} />
        <TextInput placeholder='Rechercher' placeholderTextColor={'#ccc'} style={styles.input} />
      </View>
      <View>
      <ScrollView horizontal style={{}} >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={{ alignItems: 'center', gap: 10 }} >
              {/* <View></View> */}
              <Icon name='plus' size={50} style={{ ...styles.icon, borderRadius: 30, backgroundColor: '#F2F2F2' }} />
              <Text style={{ opacity: 0.35 }}>Your story</Text>
            </View>
          </TouchableOpacity>
          <FlatList horizontal={true} data={personneOnline} keyExtractor={item => item.image} renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={{ alignItems: 'center', marginLeft: 30, gap: 10, position: 'relative' }} >
                <Image source={item.image} style={{ ...styles.image, width: 60, height: 60, borderRadius: 35, }} resizeMode='cover' />
                <Text style={styles.online}></Text>
                <Text style={{ opacity: 0.35 }}>{item.name}</Text>
              </View>
            </TouchableOpacity>

          )} />
        </View>
      </ScrollView>
      </View>
      <View style={{marginTop:30}}>
        <Image source={imagePath.personne2} style={{...styles.image, width: 60, height: 60, borderRadius: 35,}} />
        <View>
          <Text></Text>
        </View>
      </View>

    </SafeAreaView>

  )
}
export default ChatsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  }, image: {
    width: 45,
    height: 45,
    borderRadius: 25
  },
  elements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  icon: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 20
  },
  input: {
    // borderWidth:1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 35,
    backgroundColor: '#F2F2F2',
    width: '100%'
  },
  online: {
    width: 12,
    height: 12,
    backgroundColor: '#5AD439',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 6,
    position: 'absolute',
    bottom: 30,
    right: 10,
  }

})
