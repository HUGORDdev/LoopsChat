import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import imagePath from '../constant/imagePath'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


type BottomTabParamList = {
    For_You: undefined;
    Bussiness: undefined;
    // ajoute toutes tes screens ici
};
const Tab = createMaterialTopTabNavigator<BottomTabParamList>();
const data = [
    {
        image: imagePath.Apple,
        nom: 'apple'
    },
    {
        image: imagePath.Microsoft,
        nom: 'Microsoft'
    },
    {
        image: imagePath.Disney,
        nom: 'Disney'
    },
]
const dataMore = [
    {
        image: imagePath.McDonald,
        nom: 'McDonald\'s',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos'
    },
    {
        image: imagePath.Airbnb,
        nom: 'Airbnb',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos'

    },
    {
        image: imagePath.Facebook,
        nom: 'Facebook',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos'
    },
    {
        image: imagePath.Disney,
        nom: 'Airbnb',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos'
    },
    {
        image: imagePath.Instagram,
        nom: 'Instagram',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos'
    },
]

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, sunt quam libero, corporis odit, impedit adipisci rerum quod qui ullam? Velit nulla est voluptatibus consequuntur laudantium repudiandae incidunt eos.
const For_You = () => {
    const Slice = (text: string) => {
        const maxLength = 100
        if (text.length <= maxLength) { return (text) } else {
            return text.substring(0, maxLength) + '...'
        }
    }
    return (
        <ScrollView style={{ ...styles.container, paddingHorizontal: 0, marginBottom: 50 }}>
            <Text style={styles.Title}>Recent</Text>
            <View>
                <FlatList
                    scrollEnabled
                    horizontal
                    data={data}
                    contentContainerStyle={{ gap: 30, marginTop: 20, justifyContent: 'center' }}
                    keyExtractor={item => item.image} renderItem={({ item }) => (
                        <View style={{ alignItems: 'center' }} >
                            <Image source={item.image} style={styles.Logo} />
                            <Text>{item.nom}</Text>
                        </View>
                    )} />
            </View>
            <Text style={styles.Title}>More</Text>
            <FlatList
                scrollEnabled={false}
                nestedScrollEnabled={false}
                data={dataMore}
                contentContainerStyle={{ gap: 30, justifyContent: 'center', marginTop: 20 }}
                keyExtractor={item => item.image} renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', flexDirection: 'row', gap: 20 }} >
                        <Image source={item.image} style={styles.Logo} />
                        <View style={styles.sectionMore}>
                            <Text style={{ fontSize: 17, fontWeight: 'semibold' }}>{item.nom}</Text>
                            <Text style={{ fontSize: 13, opacity: 0.5, fontWeight: 'regular' }}> {Slice(item.info)}</Text>
                        </View>
                    </View>
                )} />
        </ScrollView>



    )
}

const Bussiness = () => {
    return (<View><Text>hello Bussiness</Text></View>)
}
const Discover = () => {

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={{flex:1}}>    */}
            <StatusBar barStyle='dark-content' />
            <View style={styles.elements}>
                <View style={styles.section}>
                    <TouchableOpacity>
                        <Image source={imagePath.personne} style={styles.image} resizeMode='cover' />
                    </TouchableOpacity>
                    <Text style={styles.title}>Discover</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'relative', justifyContent: 'center', marginVertical: 20 }}>
                <Icon name='magnify' size={25} color={'#ccc'} style={{ position: 'absolute', top: 7, zIndex: 1, left: 7 }} />
                <TextInput placeholder='Rechercher' placeholderTextColor={'#ccc'} style={styles.input} />
            </View>
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                }}
               
            >
                <Tab.Screen name='For_You' component={For_You} />
                <Tab.Screen name='Bussiness' component={Bussiness} />
            </Tab.Navigator>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,

    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    Logo: {
        width: 65,
        height: 65,
        borderRadius: 30
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
    sectionMore: {
        gap: 7,
        width: '75%'
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})