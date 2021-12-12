import React from 'react';
import { useDispatch } from 'react-redux';

import { Text, View, Button, Image, ActivityIndicator } from 'react-native';

import { getDataByUsername } from '../redux/actions/dataActions'

const UserCard = ({ styles, allUsersLoading, allUsersError, login, avatar_url  }) => {
    
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
                                color="#81b0ff"
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


export default UserCard
