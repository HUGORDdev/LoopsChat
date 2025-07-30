import { Button, FlatList, Image, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../constant/Color';
import imagePath from '../constant/imagePath';

const Carre = () => (
    <View style={{
        width: 20,
        height: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>
        {[...Array(4)].map((_, i) => (
            <View key={i} style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: '#007aff',
                margin: 2,
            }} />
        ))}
    </View>
);

const Messge = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Salut !' },
        { id: '2', text: 'Comment ça va ?' },
        { id: '3', text: 'Comment ça va ?' },
        { id: '4', text: 'Comment ça va ?' },
    ]);

    const personne = {
        key: '1',
        image: imagePath.personne5,
        name: 'leo',
        lu: true,
        lastMessage: 'You: Comment tu vas gars',
        date: '9:40 AM',
    };
    // ajout d'un message
    const handleSendMessage = (message: string) => {
        setMessages([...messages, { id: Date.now().toString(), text: message }])
    }
    const renderHeader = () => (
        <View style={{ ...styles.section, gap: 15, padding: 20 }}>
            <Image source={personne.image} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <View style={styles.section}>
                <Text style={{ ...styles.nameUser, fontSize: 24 }}>{personne.name}</Text>
                <Text style={{ ...styles.sousTitle, textTransform: 'none', fontWeight: 'regular' }}>
                    You're friends on Facebook
                </Text>
            </View>
            <View style={styles.section}>
                <View style={styles.sectionRow}>
                    <Image source={personne.image} style={styles.image} />
                    <Image source={imagePath.personne} style={{ ...styles.image, borderWidth: 2, borderColor: '#fff', left: -10 }} />
                </View>
                <Text style={{ ...styles.sousTitle, fontSize: 12, fontWeight: 'light', opacity: 0.30 }}>
                    Say hi to your new Facebook friends {personne.name}
                </Text>
            </View>
        </View>
    );

    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 :60 } // Ajuste selon ton header
        >
            <View  style={styles.container}>
                <StatusBar barStyle={'dark-content'} />

                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={renderHeader}
                    // inverted
                    // ListFooterComponent={()=>()}
                    renderItem={({ item }) => (
                        <View style={{flexDirection:'row'}}>
                            <View><Image source={personne.image} style={styles.image}/></View>
                            <View style={styles.messageBubble}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>

                    )}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 10,
                        justifyContent: 'flex-end'
                    }}
                    keyboardShouldPersistTaps='handled'
                />

                <View style={styles.inputContainer}>
                    <View style={{ ...styles.sectionRow, gap: 15 }}>
                        <TouchableOpacity>
                            <Carre />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='camera' color={Color.blueApp} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='image' color={Color.blueApp} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='microphone' color={Color.blueApp} size={25} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', position: 'relative', flex: 1 }}>
                            <TextInput placeholder='Aa'
                                placeholderTextColor={'#999'}
                                style={styles.input}
                                value={message}
                                onChangeText={(text) => { setMessage(text) }} />
                            <TouchableOpacity>
                                <Icon name='emoticon-happy' color={Color.blueApp}
                                    size={25}
                                    style={{ position: 'absolute', right: 20, top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Icon name='thumb-up' color={Color.blueApp} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        </KeyboardAvoidingView>
    );

    // <SafeAreaView style={styles.container}>
    // <KeyboardAvoidingView
    //     style={styles.container}
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     // keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0} // Ajustez selon la hauteur de RowInformation
    // >
    //     <StatusBar barStyle={'dark-content'} />

    //     <FlatList
    //         data={messages}
    //         keyExtractor={item => item.id}
    //         ListHeaderComponent={renderHeader}
    //         renderItem={({ item }) => (
    //             <View style={styles.messageBubble}>
    //                 <Text>{item.text}</Text>
    //             </View>
    //         )}
    //         contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 ,justifyContent:'flex-start'}}
    //         // style={{ flex: 1 }}
    //     />

    //     <View style={styles.inputContainer}>
    //         <View style={{ ...styles.sectionRow, gap: 15 }}>
    //             <TouchableOpacity>
    //                 <Carre />
    //             </TouchableOpacity>
    //             <TouchableOpacity>
    //                 <Icon name='camera' color={Color.blueApp} size={25} />
    //             </TouchableOpacity>
    //             <TouchableOpacity>
    //                 <Icon name='image' color={Color.blueApp} size={25} />
    //             </TouchableOpacity>
    //             <TouchableOpacity>
    //                 <Icon name='microphone' color={Color.blueApp} size={25} />
    //             </TouchableOpacity>

    //             <View style={{ flexDirection: 'row', position: 'relative', flex: 1 }}>
    //                 <TextInput placeholder='Aa'
    //                     placeholderTextColor={'#999'}
    //                     style={styles.input}
    //                     value={message}
    //                     onChangeText={(text) => { setMessage(text) }} />
    //                 <TouchableOpacity>
    //                     <Icon name='emoticon-happy' color={Color.blueApp}
    //                         size={25}
    //                         style={{ position: 'absolute', right: 20, top: 5 }} />
    //                 </TouchableOpacity>
    //             </View>
    //             <TouchableOpacity>
    //                 <Icon name='thumb-up' color={Color.blueApp} size={25} />
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // </KeyboardAvoidingView>
    //  </SafeAreaView>

};

export default Messge;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
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
    input: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    messageBubble: {
        margin: 5,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },

    inputContainer: {
        // marginBottom: 10,
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },

});
{/* 
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

            </KeyboardAvoidingView> */}
{/* <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  // keyboardVerticalOffset={80}
                >
                    <FlatList
                        data={messages}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.messageBubble}>
                                <Text>{item.text}</Text>
                            </View>
                        )}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
                    />
                    <View style={{ ...styles.sectionRow, gap: 15 }}>
                        {/* <TouchableOpacity>
                        <Carre />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='camera' color={Color.blueApp} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='image' color={Color.blueApp} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='microphone' color={Color.blueApp} size={25} />
                    </TouchableOpacity> 

                        <View style={{ flexDirection: 'row', position: 'relative', flex: 1 }}>
                            <TextInput placeholder='Aa' placeholderTextColor={'#999'} style={styles.input} />
                            <TouchableOpacity>
                                <Icon name='emoticon-happy' color={Color.blueApp} size={25} style={{ position: 'absolute', left: -30, top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        /* <TouchableOpacity>
                        <Icon name='thumb-up' color={Color.blueApp} size={25} />
                    </TouchableOpacity> 
                    </View>
                </KeyboardAvoidingView> */}