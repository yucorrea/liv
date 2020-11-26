import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: 32,
    },
    inputContainer: {
       width: "90%",
        marginVertical: 24,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#fff"
    },
    profile: {
        flexDirection: "row",
        alignItems: "center"
    },  
    avatar: {
        height: 24,
        width: 24,
        marginRight: 12
    },
    name: {
        fontSize: 14,
        color: "#fff",
    },
    button: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 14,
        color: "#5A7374"
    }
})