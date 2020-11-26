import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    footer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00878F"
    },
    page: {
      padding: 8,
      backgroundColor: "#fff",
      borderRadius: 4
    }
});