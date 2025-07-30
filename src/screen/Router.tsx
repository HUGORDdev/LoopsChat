import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Discover from './Discover'
import ListContact from './ListContact'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatsScreen from './ChatsScreen'
import FilleDeDiscussion from './FilleDeDiscussion'
import Color from '../constant/Color'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePath from '../constant/imagePath'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootBottomParamList, RootStackPAramList } from './Type.tsx'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator<RootStackPAramList>()
const Tab = createBottomTabNavigator<RootBottomParamList>()
const personne = {
    key: '1',
    image: imagePath.personne5,
    name: 'leo',
    lu: true,
    lastMessage: 'You: Comment tu vas gars',
    date: '9:40 AM',
};
type FilesDiscussion = NativeStackNavigationProp<RootStackPAramList,'Discussion'>
function Naviguation() {
    const Navigation =useNavigation<FilesDiscussion>()
    return (
        <Stack.Navigator initialRouteName='Routers' screenOptions={{}}>
            <Stack.Screen name='Routers' component={Router} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Discussion'
                component={FilleDeDiscussion}
                options={{
                    title: '',
                    headerLeft: () => {
                        return (
                            <View style={styles.RowInformation}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <Pressable onPress={()=>{Navigation.goBack()}}>
                                    <Icon name='chevron-left' color={Color.blueApp} size={45} />

                                    </Pressable>
                                    <Image source={personne.image} style={styles.image} />
                                    <View>
                                        <Text style={styles.nameUser}>{personne.name}</Text>
                                        <Text style={styles.sousTitle}>Messenger</Text>
                                    </View>
                                </View>

                            </View>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View style={{ flexDirection: 'row', gap: 10, marginRight: 20 }}>
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

function Router (){
    return (
        <Tab.Navigator initialRouteName='home'
            screenOptions={{
                headerShown: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['rgba(128,128,128,1)', 'rgba(255,255,255,1)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ flex: 1 }}
                    />
                ),
                tabBarStyle: {
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0,
                    // backgroundColor: 'transparent',
                },
            }}>
            <Tab.Screen name='home' component={Naviguation} options={{
                title: '',
                tabBarIcon: (({ focused }) => (
                    <FontAwesome name='comment' size={25} color={focused ? '#000' : '#A4AAB2'} />
                )),
            }} />
            <Tab.Screen name='Contacts' component={ListContact} options={{
                title: '',
                tabBarIcon: (({ focused }) => (
                    <Icon name='account-group' size={25} color={focused ? '#000' : '#A4AAB2'} />
                )),

            }} />
            <Tab.Screen name='Discover' component={Discover}
                options={{
                    title: '',
                    tabBarIcon: (({ focused }) => (
                        <Icon name='compass' size={25} color={focused ? '#000' : '#A4AAB2'} />
                    )),
                }}
            />
        </Tab.Navigator>
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