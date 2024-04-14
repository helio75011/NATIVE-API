import { StyleSheet } from "react-native";

export default StyleSheet.create({

    color: '#ba0d7b',
    container: {
        flex: 1, // tres important
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },

    input : {
        borderColor: '#ba0d7b',
        borderWidth: 1,
        width: 200,
        height: 40,
        padding: 5,
        margintop: 25,
        marginBottom: 10
    }
})
