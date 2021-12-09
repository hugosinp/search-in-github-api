import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, Linking } from 'react-native';

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
        setAvatar(data.avatar_url)
        setUserUrl(data.html_url)
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Search a GitHub user..."
                    style={styles.userInput}
                />
                <Button
                    onPress={search}
                    title="Search"
                    color="#841584"
                    accessibilityLabel="Search"
                    style={styles.searchButton}
                />
            </View>

            {
                search ?
                    <View>
                        <Image
                            style={styles.logo}
                            source={{
                            uri: `${avatar}`,
                            }}
                        />
                        <Text style={styles.login}>{username}</Text>
                        <Text>id: {id}</Text>
                        <Text>node_id: {nodeId}</Text>
                        <Button
                            title="Link to Profile"
                            onPress={() => Linking.openURL(`${userUrl}`)}
                            style={styles.url}
                        />
                    </View>
                : !search &&
                    <Text style={styles.login}>Search an user !</Text>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fixToText: {
        position: 'absolute',
        top: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
        margin: 'auto',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    login:{
        fontWeight: 'bold',
        fontSize: 40
    },
    url:{
        color:"blue"
    },
    userInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        width: '80%',
    },
    searchButton: {
        width: '20%',
        backgroundColor: 'white',
    }
});
  
export default MainView
