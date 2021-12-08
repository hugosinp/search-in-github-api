import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  const [username, setUsername] = useState("")

  async function search() {
    const response = await fetch(`https://search-github-api.herokuapp.com/api/users/${username}`);
    const data = await response.json();
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="useless placeholder"
      />
      <Button
        onPress={search}
        title="Search"
        color="#841584"
        accessibilityLabel="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
