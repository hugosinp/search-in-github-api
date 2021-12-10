import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, } from 'react-native';

import UserDetails from '../components/UserDetails'
import UserCard from '../components/UserCard'

import { getData, getDataByUsername } from '../redux/actions/dataActions'

const MainView = () => {
    const [username, setUsername] = useState("")

    const dispatch = useDispatch()

    const myData = useSelector(state => state.myData)
    const {
        userLoading,
        userData,
        userError,
        allUsersLoading,
        allUsersData,
        allUsersError,
    } = myData

    useEffect(() =>  {
        dispatch(getData())
    }, [])

    const renderItem = ({ item }) => (
        <UserCard
            allUsersLoading={allUsersLoading}
            allUsersError={allUsersError}
            login={item.login}
            avatar_url={item.avatar_url}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Search a GitHub user..."
                    style={styles.userInput}
                />
                <Button
                    onPress={() => {
                        dispatch(getDataByUsername(username))
                    }}
                    title="Search"
                    color="#841584"
                    accessibilityLabel="Search"
                    style={styles.searchButton}
                />
            </View>

            <View style={styles.con}>
                <UserDetails 
                    userLoading={userLoading} 
                    userData={userData}
                    userError={userError}
                />
            </View>
            
            <View>
                <Text>Known Users : </Text>
                <FlatList
                    data={allUsersData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    con: {
        flex: 2
    },

    container: {
        flex: 1,
        marginRight: 40,
        marginLeft: 40,
    },

    userInput: {
        flex: 0.1,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    
    searchButton: {
        flex: 0.5,
    },
});
  
export default MainView
