import { StyleSheet } from 'react-native';

export const light_styles = StyleSheet.create({
    // MainView Styles
    mainContainer: {
        flex: 1,
    },

    subContainer: {
        flex: 1,
        marginRight: 40,
        marginLeft: 40,
    },

    userDetails: {
        flex: 2
    },

    userInput: {
        flex: 1,
        padding: 20,
        margin: 15,
        color: 'black',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 20,
    },

    searchButton: {
        flex: 1,
        backgroundColor: '#81b0ff',
    },

    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',  
    },

    // UserCard styles
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
    },

    // UserDetails styles
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    row: {
        alignItems: 'center',
    },
    searchLogo: {
        width: 120,
        height: 120,
    },
    bigLogin:{
        fontWeight: 'bold',
        fontSize: 40
    },
    url:{
        margin: 20,
        color:"blue"
    },
    searchText:{
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20
    },

});

export const dark_styles = StyleSheet.create({
    // Global styles
    textColor: {
        color: '#fff',
    },

    // MainView Styles
    mainContainer: {
        flex: 1,
        backgroundColor: '#292b2c',
    },

    subContainer: {
        flex: 1,
        marginRight: 40,
        marginLeft: 40,
    },

    userDetails: {
        flex: 2
    },

    userInput: {
        flex: 1,
        padding: 20,
        margin: 15,
        color: 'black',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        color: 'black'
    },

    searchButton: {
        flex: 1,
    },

    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',   
    },

    // UserCard styles
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
        fontSize: 20,
        color: '#fff',
    },

    // UserDetails styles
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    row: {
        alignItems: 'center',
    },
    searchLogo: {
        width: 120,
        height: 120,
    },
    bigLogin:{
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff',
    },
    url:{
        margin: 20,
        color: '#fff',
    },
    searchText:{
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
});