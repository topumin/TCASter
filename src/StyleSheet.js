import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // Fonts
        
    faculty: {
        color: '#e9585f',
        fontSize: 12.5,
        fontFamily: 'Prompt-Bold',
        lineHeight: 18,
        },
    department: {
        color: '#949494',
        fontSize: 12.5,
        fontFamily: 'Prompt-SemiBold',
        lineHeight: 18,
    },
    university: {
        marginTop: 8,
        color: '#949494',
        fontSize: 11.5,
        fontFamily: 'Prompt-Regular',
    },
    roundLabel: {
        color: '#606060',
        fontSize: 13,
        fontFamily: 'Prompt-Medium',
        lineHeight: 17.5,
    },
    minScoreLabel: {
        color: '#969696',
        fontSize: 9.5,
        fontFamily: 'Prompt-Medium',
    },
    score: {
        color: '#5d5d5d',
        fontSize: 14,
        fontFamily: 'Prompt-Medium',
    },

    // Layout

    container: {
        flex: 1,
        height: '100%',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    topRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 10,
    },
    bottomLeft: {
        marginRight: 10,
    },
    bottomRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },

    // Customize

    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 8,
        paddingTop: 11,
        paddingHorizontal: 11,
        marginVertical: 0,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    },
    navigateTab: {
        paddingVertical: 8,
        paddingHorizontal: 11,
        backgroundColor: '#eee',
    },
    navigateText: {
        fontSize: 10,
    },
    logo: {
        width: 55,
        height: 55,
        marginRight: 10,
    },
    detail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
    },
    arrow: {
        width: 15,
    },
    roundGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    roundActive: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Prompt-Regular',
        fontSize: 10,
        height: 17,
        width: 30,
        marginRight: 5,
        color: '#fff',
        backgroundColor: '#2dcc70',
        borderRadius: 10,
    },
    roundInActive: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Prompt-Regular',
        fontSize: 10,
        height: 17,
        width: 30,
        marginRight: 5,
        color: '#fff',
        backgroundColor: '#dadada',
        borderRadius: 10,
    },
    minScore: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
    },

    // Modal
        
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    dimWarningGroup: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        elevation: 5
    },
    warningGroup: {
        position: 'absolute',
        top: '50%',
        left: '10%',
        zIndex: 2,
        width: '80%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    warningText: {
        fontFamily: 'Prompt-Medium',
        fontSize: 14,
    },
    warningCloseText: {
        fontFamily: 'Prompt-Medium',
        fontSize: 14,
        color: '#f81511',
    },
});

export default styles;