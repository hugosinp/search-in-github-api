import React from 'react'
import { StyleSheet, Text, View, Button, Image, Linking, ActivityIndicator } from 'react-native';

const UserDetails = ({ userLoading, userData, userError }) => {
    return (
        <View style={styles.container}>
            {
                userLoading ?
                    <ActivityIndicator size="large" />
                : userData ?
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={{
                            uri: `${userData.avatar_url}`,
                            }}
                        />
                        <Text style={styles.login}>{userData.login}</Text>
                        <Text>id: {userData.id}</Text>
                        <Text>node_id: {userData.node_id}</Text>
                        <Button
                            title="Link to Profile"
                            onPress={() => Linking.openURL(`${userData.html_url}`)}
                            style={styles.url}
                        />
                    </View>
                : userError ?
                    <Text>An error occured during fetch ! {userError}</Text>
                :
                    <Text>Search an User !</Text>   
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        margin: 20,
        color:"blue"
    },
});

export default UserDetails
