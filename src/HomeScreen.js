import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
    {
        id: "1",
        faculty: "คณะวิทยาศาสตร์",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        department: "ฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา) สาขาเอกฟิสิกส์",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "", "", ""],
        min_score: "",
    },
    {
        id: "2",
        faculty: "คณะวิทยาศาสตร์",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        department: "ฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา) สาขาเอกฟิสิกส์วัสดุและเทคโนโลยีนาโน",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "", "", ""],
        min_score: "",
    },
    {
        id: "3",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาเคมี",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "12,750.00",
    },
    {
        id: "4",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาคณิตศาสตร์",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "13,460.60",
    },
    {
        id: "5",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาสถิติ",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "3,915.00",
    },
    {
        id: "6",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "15,578.00",
    },
    {
        id: "7",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาจุลชีววิทยา",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "14,018.20",
    },
    {
        id: "8",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาวิทยาศาสตร์การอาหาร",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["1", "2", "3", ""],
        min_score: "16,314.90",
    },
    {
        id: "9",
        faculty: "คณะวิทยาศาสตร์",
        department: "สาขาวิชาฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา)",
        logo: "https://topumin.com/images/skooldio/science.jpg",
        university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
        round: ["", "2", "3", ""],
        min_score: "8,824.00",
    },
];



const Item = ({ faculty, logo, department, university, round, min_score }) => (
    <TouchableOpacity style={styles.item} setOpacityTo={50}>
        <View style={styles.top}>
            <ImageBackground source={{uri: logo}} style={styles.logo}></ImageBackground>
            <View style={styles.topRight}>
                <View style={styles.detail}>
                    <Text style={styles.faculty}>{faculty}</Text>
                    <Text style={styles.department}>{department}</Text>
                    <Text style={styles.university}>{university}</Text>
                </View>
                <View style={styles.arrow}>
                    <Text style={[styles.university, {fontSize: 12}]}> > </Text>
                </View>
            </View>
        </View>
        <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
                <Text style={styles.roundLabel}>รอบที่เปิด</Text>
            </View>
            <View style={styles.bottomRight}>
                <View style={styles.roundGroup}>
                    { 
                        round.map((item, key)=>(
                            <View style={{flexDirection: 'row'}}>
                                {item == "" ?
                                    (<Text key={key} style={styles.roundInActive}> {key+1} </Text>) : (<Text key={key} style={styles.roundActive}> {item} </Text>)
                                }
                            </View>
                        )) 
                    }
                </View>
                <View style={[styles.minScore]}>
                    { min_score != "" ? (<Text style={styles.minScoreLabel}>ต่ำสุด '62</Text>) : null }
                    <Text style={styles.score}>{min_score}</Text>
                </View>
            </View>
        </View>
        
    </TouchableOpacity>
);

export class HomeScreen extends Component {
    render() {

        const renderItem = ({ item }) => (
            <View>
                <Item 
                    logo={item.logo}
                    faculty={item.faculty}
                    department={item.department}
                    university={item.university}
                    round={item.round}
                    min_score={item.min_score}
                />
            </View>
        );
          
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigateTab}>
                    <Text style={[styles.navigateText, {fontFamily: 'Prompt-Regular', color: '#969696',}]}>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี / คณะวิทยาศาสตร์พบทั้งหมด {DATA.length} สาขา </Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
          );

    }
}

const styles = StyleSheet.create({
    // fonts
    faculty: {
        color: '#e9585f',
        fontSize: 12.5,
        fontFamily: 'Prompt-Bold',
        lineHeight: 15,
    },
    department: {
        color: '#949494',
        fontSize: 12.5,
        fontFamily: 'Prompt-SemiBold',
        lineHeight: 15,
    },
    university: {
        marginTop: 5,
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
        fontSize: 12.5,
        fontFamily: 'Prompt-Medium',
    },

    //layer
    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginVertical: 0,
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
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


    // general
    container: {
      flex: 1,
      height: '100%',
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
        // marginBottom: -15,
    },
  });

export default HomeScreen
