import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, SafeAreaView, FlatList, TextInput, Button, Switch } from 'react-native';

import UserDetails from '../UserDetails'
import UserCard from '../UserCard'

const MainView = ({
    userLoading,
    userData,
    userError,
    allUsersLoading,
    allUsersData,
    allUsersError,
    darkMode,
    getData,
    getDataByUsername,
    switchMode,
    styles
}) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("majdi")

    const renderItem = ({ item }) => (
        <UserCard
            allUsersLoading={allUsersLoading}
            allUsersError={allUsersError}
            login={item.login}
            avatar_url={item.avatar_url}
            styles={styles}
        />
    );

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={styles.cont}>
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
                        color="#81b0ff"
                        accessibilityLabel="Search"
                        style={styles.searchButton}
                    />
                </View>

                <View style={styles.row}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={() => {
                            dispatch(switchMode())
                        }}
                        value={darkMode}
                    />
                </View>

                <View style={styles.userDetails}>
                    <UserDetails 
                        userLoading={userLoading} 
                        userData={userData}
                        userError={userError}
                        styles={styles}
                    />
                </View>
                
                <View>
                    <Text style={styles.textColor}>Known Users : {darkMode}</Text>
                    <FlatList
                        data={allUsersData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MainView
