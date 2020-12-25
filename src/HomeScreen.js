import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        const url = 'https://topumin.com/images/skooldio/data.php';
        axios.get(url)
        .then(response=>{
            this.setState({data: response.data.data})
        })
        .catch(error=>{
            alert(JSON.stringify(error));
        })
    }

    renderItemList(item){
        return(
            <TouchableOpacity style={styles.item} setOpacityTo={70}>
            <View style={styles.top}>
                <ImageBackground source={{uri: item.logo}} style={styles.logo}></ImageBackground>
                <View style={styles.topRight}>
                    <View style={styles.detail}>
                        <Text style={styles.faculty}>{item.faculty}</Text>
                        <Text style={styles.department}>{item.department}</Text>
                        <Text style={styles.university}>{item.university}</Text>
                    </View>
                    <View style={styles.arrow}>
                        <Text style={[styles.university, {fontSize: 12}]}> {'>'} </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.roundLabel}>รอบที่เปิด</Text>
                </View>
                <View style={styles.bottomRight}>
                    <View style={styles.roundGroup}>
                        {item.round[0] == 1 ? (<Text style={styles.roundActive}> {item.round[0]} </Text>) : (<Text style={styles.roundInActive}> 1 </Text>)}
                        {item.round[1] == 2 ? (<Text style={styles.roundActive}> {item.round[1]} </Text>) : (<Text style={styles.roundInActive}> 2 </Text>)}
                        {item.round[2] == 3 ? (<Text style={styles.roundActive}> {item.round[2]} </Text>) : (<Text style={styles.roundInActive}> 3 </Text>)}
                        {item.round[3] == 4 ? (<Text style={styles.roundActive}> {item.round[3]} </Text>) : (<Text style={styles.roundInActive}> 4 </Text>)}
                    </View>
                    <View style={[styles.minScore]}>
                        { item.min_score != "" ? (<Text style={styles.minScoreLabel}>ต่ำสุด '62</Text>) : null }
                        <Text style={styles.score}>{item.min_score}</Text>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity>
    )}

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigateTab}>
                    <Text style={[styles.navigateText, {fontFamily: 'Prompt-Regular', color: '#969696',}]}>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี / คณะวิทยาศาสตร์พบทั้งหมด 9 สาขา </Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={ ({item}) => this.renderItemList(item) }
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    // fonts
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

    //layout
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


    // customize
    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 8,
        paddingTop: 11,
        paddingHorizontal: 11,
        marginVertical: 0,
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
    },
    navigateTab: {
        paddingVertical: 10,
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
  });

export default HomeScreen
