import React from 'react';
import { useDispatch } from 'react-redux';

import { StyleSheet, Text, View, Button, Image, FlatList, ActivityIndicator } from 'react-native';

import { getDataByUsername } from '../redux/actions/dataActions'

const UserCard = ({ allUsersLoading, allUsersError, login, avatar_url  }) => {
    
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {
                allUsersLoading ?
                    <ActivityIndicator size="large" />
                : login ?
                        <View style={styles.container}>

                            <Image
                                style={styles.logo}
                                source={{
                                uri: `${avatar_url}`,
                                }}
                            />

                            <Text style={styles.login}>
                                {login}
                            </Text>

                            <Button 
                                title="Go"
                                color="#841584"
                                onPress={() => {
                                    dispatch(getDataByUsername(login))
                                }}
                            />
                            
                        </View>
                : allUsersError ? 
                    <Text>An error occured during fetch ! {userError}</Text>
                :
                    <Text>No users found in the database.</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    login:{
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default UserCard
