import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const messages = [
    { id: '1', text: 'Salut !' },
    { id: '2', text: 'Comment ça va ?' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Écris un message"
          />
         <Button title="Envoyer" onPress={() => { }} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  messageBubble: {
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15
  }
});