import React from 'react'
import { Text, View, Button, Image, Linking, ActivityIndicator } from 'react-native';

import searchLogo from '../static/img/search.png'

const UserDetails = ({ styles, userLoading, userData, userError }) => {

    return (
        <View style={styles.containerCenter}>
            {
                userLoading ?
                    <ActivityIndicator size="large" />
                : userData && userData.length === undefined ?
                    <View style={styles.containerCenter}>
                        <Image
                            style={styles.bigLogo}
                            source={{
                                uri: `${userData.avatar_url}`,
                            }}
                        />
                        <Text style={styles.bigLogin}>{userData.login}</Text>
                        {
                            userData.name &&
                                <Text style={styles.textColor}>{userData.name} | {userData.bio}</Text>
                        }
                        {
                            userData.email &&
                                <Text style={styles.textColor}>📫 Email : {userData.email}</Text>
                        }
                        {
                            userData.company &&
                                <Text style={styles.textColor}>🏢 Company : {userData.company}</Text>
                        }
                        {
                            userData.location &&
                                <Text style={styles.textColor}>📍 Location : {userData.location}</Text>
                        }
                        {
                            userData.twitter_url &&
                                <Text style={styles.textColor}>Twitter : {userData.twitter_url}</Text>
                        }
                        <Text style={styles.textColor}>User since : {userData.created_at}</Text>
                        <Text style={styles.textColor}>
                            Following: {userData.following} | Followers: {userData.followers}
                        </Text>
                        
                        <Button
                            title="Link to Profile"
                            onPress={() => Linking.openURL(`${userData.html_url}`)}
                            style={styles.url}
                        />
                    </View>
                : userError ?
                    <Text>An error occured during fetch ! {userError}</Text>
                :
                    <View style={styles.row}>
                        <Image
                            style={styles.searchLogo}
                            source={searchLogo}
                        />
                        <Text style={styles.searchText}>Search a GitHub user !</Text>
                    </View>
            }
        </View>
    )
}

export default UserDetails
