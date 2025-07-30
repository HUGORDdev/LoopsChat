import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import imagePath from '../constant/imagePath'
const ListContact = () => {
    const personne = [
        {
            key: '1',
            image: imagePath.personne5,
            name: 'leo',
            lu: true,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
            online: true,
            time: 0

        },
        {
            key: '2',
            image: imagePath.personneProduct,
            name: 'berthe',
            lu: false,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
            online: false,
            time: 8
        },
        {
            key: '3',
            image: imagePath.personne3,
            name: 'luca',
            lu: false,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
            online: true,
            time: 10
        },
        {
            key: '4',
            image: imagePath.personne4,
            name: 'Steve',
            lu: true,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
            online: false,
            time: 10
        },
        {
            key: '5',
            image: imagePath.personne2,
            name: 'jonathan',
            lu: false,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 PM',
            online: true,
            time: 0
        },
        {
            key: '6',
            image: imagePath.personne4,
            name: 'Steve',
            lu: true,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 AM',
            online: false,
            time: 30
        },
        {
            key: '7',
            image: imagePath.personne2,
            name: 'jonathan',
            lu: false,
            lastMessage: 'You: Comment tu vas gars',
            date: '9:40 PM',
            online: false,
            time: 45
        },
    ]
    const personneVerYRecentlyOnline = personne.filter((item) => {
        if (item.time < 30) {
            return item
        }

    })
    const PersonneRecently = personne.filter((item) => {
        if (item.time >= 30) {
            return item
        }
    })
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
                <View style={styles.elements}>
                    <View style={styles.section}>
                        <TouchableOpacity>
                            <Image source={imagePath.personne} style={styles.image} />
                        </TouchableOpacity>
                        <Text style={styles.title}>people</Text>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                            <Icon name='comment-processing' size={25} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='account-plus' size={25} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            <ScrollView>
                
                <View style={{ flexDirection: 'row', position: 'relative', justifyContent: 'center', marginVertical: 20 }}>
                    <Icon name='magnify' size={25} color={'#ccc'} style={{ position: 'absolute', top: 7, zIndex: 1, left: 7 }} />
                    <TextInput placeholder='Rechercher' placeholderTextColor={'#ccc'} style={styles.input} />
                </View>
                <View style={styles.section}>
                    <Icon name='plus' style={{ ...styles.icon, backgroundColor: '#F2F2F2' }} size={32} />
                    <View>
                        <Text style={styles.Story}>Your Story</Text>
                        <Text style={styles.AddStory}>Add to your story</Text>
                    </View>
                </View>
                <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={false}
                    ItemSeparatorComponent={() => (<View style={styles.ContainerBar}><View style={styles.Bar} ></View></View>)}
                    data={personneVerYRecentlyOnline}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return (<View style={styles.PersonneList}>
                            <View style={styles.PersonneConnection}>
                                <Image source={item.image} style={styles.image} />
                                {((item.online) ? <Text style={styles.online} /> :
                                    <Text style={styles.time}>{item.time}min</Text>)

                                }
                            </View>
                            <View style={styles.ContainerPersonneName}>
                                <Text style={styles.Story}>{item.name}</Text>
                                <TouchableOpacity>
                                    <Icon name='hand-wave' style={styles.icon} size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                    }}

                />
                <View style={{ padding: 20 }}>
                    <Text style={styles.RecentlyActive}>RECENTLY ACTIVE</Text>
                </View>
                <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={false}
                    ItemSeparatorComponent={() => (<View style={styles.ContainerBar}><View style={styles.Bar} ></View></View>)}
                    data={PersonneRecently}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return (<View style={styles.PersonneList}>
                            <View style={styles.PersonneConnection}>
                                <Image source={item.image} style={styles.image} />
                                {((item.online) ? <Text style={styles.online} /> :
                                    <Text style={styles.time}>{item.time}min</Text>)

                                }
                            </View>
                            <View style={styles.ContainerPersonneName}>
                                <Text style={styles.Story}>{item.name}</Text>
                                <TouchableOpacity>
                                    <Icon name='hand-wave' style={styles.icon} size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                    }}

                />
            </ScrollView>
        </View>
    )
}

export default ListContact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical:20
    },
    image: {
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
    online: {
        width: 15,
        height: 15,
        backgroundColor: '#5AD439',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        position: 'absolute',
        bottom: 5,
        right: 1,
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
        borderRadius: 30
    },
    input: {
        // borderWidth:1,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 35,
        backgroundColor: '#F2F2F2',
        width: '100%'
    },
    Story: {
        fontSize: 20,
        fontWeight: 'medium',
    },
    AddStory: {
        fontSize: 14,
        opacity: 0.4
    },
    PersonneList: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 20,
        padding: 10,
        alignItems: 'center'
    },

    ContainerPersonneName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    Bar: {
        borderWidth: 0.25,
        opacity: 0.12,
        width: '80%'
    },
    ContainerBar: {
        alignItems: 'flex-end'
    },
    time: {
        position: 'absolute',
        backgroundColor: '#C7F0BB',
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 10,
        bottom: 2,
    },
    PersonneConnection: {
        alignItems: 'center'
    },
    RecentlyActive: {
        fontSize: 15,
        opacity: 0.3
    }

})