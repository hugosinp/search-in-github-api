import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const MainView = () => {
    const [username, setUsername] = useState("")
    const [id, setID] = useState("")
    const [nodeId, setNodeId] = useState("")
    const [avatar, setAvatar] = useState("")
    const [userUrl, setUserUrl] = useState("")

    async function search() {
        const response = await fetch(`https://search-in-github-api.herokuapp.com/api/users/${username}`);
        const data = await response.json();
    
        setUsername(data.login)
        setID(data.id)
        setNodeId(data.node_id)
        setAvatar(data.avatar)
        setUserUrl(data.userUrl)
    }
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: {avatar},
                }}
            />
            <Text>login: {username}</Text>
            <Text>id: {id}</Text>
            <Text>node_id: {nodeId}</Text>
            <Text>userUrl: {userUrl}</Text>
            <TextInput
                onChangeText={setUsername}
                value={username}
                placeholder="Type a GitHub user"
            />
            <Button
                onPress={search}
                title="Search"
                color="#841584"
                accessibilityLabel="Search"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});
  
export default MainView
