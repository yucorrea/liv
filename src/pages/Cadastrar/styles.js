import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        color: "#fff"
    },
    inputContainer: {
       width: '100%',
        height: 44,
        marginVertical: 24,
        
    },
    input: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#fff"
    },
    button: {
        width: 200,
        height: 44,
        borderRadius: 100,
        marginTop: 32,
        marginBottom: 16,
        backgroundColor: "#07A7CA",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        color: "#0C003A"
    }
})