import { FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '../constant/imagePath';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { RootStackPAramList } from './Type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

  type ChatScreen=NativeStackNavigationProp<RootStackPAramList,'Chat'>
  type Friends={
        key:string,
        image:any,
        name:string,
        lu:boolean,
        lastMessage:string,
        date:string
    }

const ChatsScreen = () => {
  const navigation = useNavigation<ChatScreen>()
  const personne = [
    {
      key: '1',
      image: imagePath.personne5,
      name: 'leo',
      lu: true,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 AM',

    },
    {
      key: '2',
      image: imagePath.personneProduct,
      name: 'berthe',
      lu: false,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 AM',
    },
    {
      key: '3',
      image: imagePath.personne3,
      name: 'luca',
      lu: false,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 AM',
    },
    {
      key: '4',
      image: imagePath.personne4,
      name: 'Steve',
      lu: true,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 AM',
    },
    {
      key: '5',
      image: imagePath.personne2,
      name: 'jonathan',
      lu: false,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 PM',
    },
    {
      key: '6',
      image: imagePath.personne4,
      name: 'Steve',
      lu: true,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 AM',
    },
    {
      key: '7',
      image: imagePath.personne2,
      name: 'jonathan',
      lu: false,
      lastMessage: 'You: Comment tu vas gars',
      date: '9:40 PM',
    },
  ]
  // pour la  suppression
  // const deleteItem = (rowKey, rowMap) => {
  //   setListData((prevData) => prevData.filter((item) => item.key !== rowKey));
  //   rowMap[rowKey].closeRow(); // Referme la ligne après suppression
  // };

  // Fonctions pour les autres actions
  const truncText = (text: string) => {
    const maxLength = 20
    if (text.length <= maxLength) { return (text) } else {
      return text.substring(0, maxLength) + '...'
    }
  }
  const handleCamera = ({ name }: { name: string }) => Alert.alert(`Ouvrir la caméra pour ${name}`);
  const handlePhone = ({ name }: { name: string }) => Alert.alert(`Appeler ${name}`);
  const handleVideo = ({ name }: { name: string }) => Alert.alert(`Démarrer un appel vidéo avec ${name}`);
  const handleMenu = ({ name }: { name: string }) => Alert.alert(`Ouvrir le menu pour ${name}`);
  const handleBell = ({ name }: { name: string }) => Alert.alert(`Activer/Désactiver notifications pour ${name}`);
  const HandleOpenDiscussion =(item:Friends)=>{
    navigation.navigate('Discussion',{Friends:item})
  }
  return (
    <View style={{ ...styles.container, paddingVertical: 20 }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.elements}>
        <View style={styles.section}>
          <TouchableOpacity>
            <Image source={imagePath.personne} style={styles.image} />
          </TouchableOpacity>
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
      <ScrollView>


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
                  <Icon name='plus' size={45} style={{ ...styles.icon, borderRadius: 30, backgroundColor: '#F2F2F2' }} />
                  <Text style={{ opacity: 0.35 }}>Your story</Text>
                </View>
              </TouchableOpacity>
              <FlatList
                scrollEnabled={false}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                horizontal={true} data={personne} keyExtractor={item => item.key} renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View style={{ alignItems: 'center', marginLeft: 30, gap: 10, position: 'relative' }} >
                      <Image source={item.image} style={{ ...styles.image, width: 55, height: 55, borderRadius: 35, }} resizeMode='cover' />
                      <Text style={styles.online}></Text>
                      <Text style={{ opacity: 0.35 }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>

                )} />
            </View>
          </ScrollView>
        </View>
        {/* <GestureHandlerRootView> */}

        <SwipeListView
          scrollEnabled={false}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          disableLeftSwipe={false}
          disableRightSwipe={false}
          leftOpenValue={135}
          stopLeftSwipe={135}
          rightOpenValue={-135}
          stopRightSwipe={-135}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              {/* Actions à gauche */}
              <View style={styles.leftActions}>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => handleCamera(data.item.name)}
                >
                  <Icon style={{ ...styles.icon, backgroundColor: '#0084FE' }} name="camera" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => handlePhone(data.item.name)}
                >
                  <Icon style={{ ...styles.icon }} name="phone" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => handleVideo(data.item.name)}
                >
                  <Icon style={{ ...styles.icon }} name="video" size={20} />
                </TouchableOpacity>
              </View>
              {/* Actions à droite */}
              <View style={styles.rightActions}>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => handleMenu(data.item.name)}
                >
                  <Icon style={{ ...styles.icon }} name="menu" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => handleBell(data.item.name)}
                >
                  <Icon style={{ ...styles.icon }} name="bell" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{}]}
                // onPress={() => deleteItem(data.item.key, rowMap)}
                >
                  <Icon style={{ ...styles.icon, backgroundColor: '#FE294D' }} name="trash-can" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          data={personne}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Pressable onPress={()=>(HandleOpenDiscussion(item))}>
              <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: '100%' }}>
                {/* <Pressable> */}
                <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image source={item.image} style={{ ...styles.image, width: 60, height: 60, borderRadius: 35, }} />
                    <View>
                      <Text style={{ ...styles.title, fontSize: 18, textTransform: 'capitalize' }}>{item.name}</Text>
                      <Text style={{ fontSize: 14, opacity: 0.5, }}>{truncText(item.lastMessage)}{' . '}{item.date}</Text>
                    </View>
                  </View>

                  {item.lu ? <Icon name='check-circle-outline' size={18} color={'#ccc'} style={{ marginLeft: 20 }} /> : <Icon name='checkbox-blank-circle-outline' size={18} color={'#ccc'} style={{ marginLeft: 20 }} />}
                </View>
                {/* </Pressable> */}
              </View>
            </Pressable>
          )}
        >
        </SwipeListView>

      </ScrollView>
    </View>

    // {/* </SafeAreaView> */}

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
  },
  rowFront: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  lastMessage: {
    fontSize: 14,
    opacity: 0.5,
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingRight: 10
    // height:'200%',
  },
  rightActions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 30,

  },

})
