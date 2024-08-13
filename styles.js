import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container:{
        flex:1,
        margin: 16,
    },
    title:{
        fontSize: 30,  
    },
    subtitle:{
        fontSize: 20,
        marginTop: 4,
        color: "#666",
    },
    input:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        marginTop: 32,
    },
    buttonContainer:{
        backgroundColor: "lightgreen",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: 8,
    },
    buttonText:{
        fontSize: 18,
    },
    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBattomWidth: 1,
        backgroundColor: "#f8f8f8",
        paddingVertical: 12,
        borderColor: 'green',
        borderWidth: 2,
        marginTop: 5,
    },
    taskText:{
        fontSize: 18,
        marginStart: 10,
    },
    taskDelete:{
        backgroundColor: "red",
        width: 23,
        height: 23,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    taskDeleteText:{
        fontSize: 18,
        color: "white",
    },
});