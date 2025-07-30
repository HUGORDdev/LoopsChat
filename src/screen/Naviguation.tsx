import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatsScreen from './ChatsScreen'
import FilleDeDiscussion from './FilleDeDiscussion'
import Color from '../constant/Color'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePath from '../constant/imagePath'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {RootStackPAramList} from './Type.tsx'
const Naviguation = () => {
    const personne = {
            key: '1',
            image: imagePath.personne5,
            name: 'leo',
            lu: true,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
        };
    const Stack = createNativeStackNavigator<RootStackPAramList>()
    return (
        <Stack.Navigator initialRouteName='Routers' screenOptions={{         }}>
            <Stack.Screen name='Routers' component={ChatsScreen} options={{
                headerShown:false
            }}  />
            <Stack.Screen name='Discussion'
                component={FilleDeDiscussion}
                options={{
                    
                    title:'',
                    headerLeft: () => {
                        return (
                            <View style={styles.RowInformation}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <Icon name='chevron-left' color={Color.blueApp} size={45} />
                                    <Image source={personne.image} style={styles.image} />
                                    <View>
                                        <Text style={styles.nameUser}>{personne.name}</Text>
                                        <Text style={styles.sousTitle}>Messenger</Text>
                                    </View>
                                </View>
                                
                            </View>
                        )
                    },
                    headerRight:()=>{
                        return(
                            <View style={{ flexDirection: 'row', gap: 10,marginRight:20}}>
                                    <TouchableOpacity>
                                        <Icon name='phone' color={Color.blueApp} size={30} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name='video' color={Color.blueApp} size={30} />
                                    </TouchableOpacity>
                                </View>
                        )
                    },
                  
                }}
                
            />
        </Stack.Navigator>
    )
}

export default Naviguation

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        // paddingBottom:5,
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: 30,
    },
    nameUser: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    sousTitle: {
        fontSize: 14,
        textTransform: 'capitalize',
        opacity: 0.35,
    },
    section: {
        alignItems: 'center',
    },
    sectionRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    RowInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
   
})