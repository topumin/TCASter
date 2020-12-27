import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, Modal,} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  
    // Declare vriable

    const [seconds, setSeconds] = React.useState(900);
    const [modalVisible, setModalVisible] = useState(false);
    const [navigateData, setNavigateData] = useState(
        {
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "faculty": "คณะวิทยาศาสตร์",
        },
    );
    const [datas, setDatas] = useState([ 
        {
            "id": "1",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "ฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา) สาขาเอกฟิสิกส์",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1"],
            "min_score": "",
        },
        {
            "id": "2",
            "faculty": "คณะวิทยาศาสตร์",
            "department":"ฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา) สาขาเอกฟิสิกส์วัสดุและเทคโนโลยีนาโน",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1"],
            "min_score": "",
        },
        {
            "id": "3",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาเคมี",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "12,750.00",
        },
        {
            "id": "4",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาคณิตศาสตร์",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "13,460.60",
        },
        {
            "id": "5",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาสถิติ",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "3,915.00",
        },
        {
            "id": "6",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "15,578.00",
        },
        {
            "id": "7",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาจุลชีววิทยา",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "14,018.20",
        },
        {
            "id": "8",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาวิทยาศาสตร์การอาหาร",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["1", "2", "3"],
            "min_score": "16,314.90",
        },
        {
            "id": "9",
            "faculty": "คณะวิทยาศาสตร์",
            "department": "สาขาวิชาฟิสิกส์ประยุกต์ (หลักสูตรสองภาษา)",
            "logo": "https://topumin.com/images/skooldio/science.jpg",
            "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนุบรี",
            "round": ["2", "3"],
            "min_score": "8,824.00",
        },
    ]);

    // Warning user to rest their eyes

    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
            setModalVisible(false);
        }else{
            setModalVisible(true);
        }
    });

    const WarningModal = () => {
        return (
            <View style={styles.modalContainer}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                        <View style={styles.dimWarningGroup}>
                            <View style={styles.warningGroup}>
                                <Text style={styles.warningText}>พักสายตาสักหน่อยนะน้อง ^_^</Text>
                                <Text 
                                    style={styles.warningCloseText} 
                                    onPress={() => {
                                        setModalVisible(false);
                                        setSeconds(900);
                                    }}>
                                        [ปิด]
                                </Text>
                            </View>
                        </View>
                </Modal>
            </View>
        );
    };

    //  Navigate Tab

    const NavigateTab = (props) => {
        return (
            <View style={styles.navigateTab}>
                <Text style={[ styles.navigateText, {fontFamily: 'Prompt-Regular', color: '#969696'}]}> 
                    {props.university} / {props.faculty}พบทั้งหมด {datas.length} สาขา
                </Text>
            </View>
        );
    };

    // Min Score

    const MinScore = (props) => {
        return (
            <View style={[styles.minScore]}>
                {props.score != "" ? (<Text style={styles.minScoreLabel}>ต่ำสุด '62</Text>) : null}<Text style={styles.score}>{props.score}</Text>
            </View>
        );
    };

    // Round Items

    const RoundItem = (props) => {
        return (
            <Text style={props.roundActive}> {props.data} </Text>
        );
    };

    // Body Function

    return (
        <SafeAreaView style={styles.container}>
            <WarningModal/>
            <NavigateTab university={navigateData.university} faculty={navigateData.faculty} />
            <ScrollView>
                {
                    datas.map( items => {
                        return(
                            <TouchableOpacity style={styles.item} key={items.id}>
                                <View style={styles.top}>
                                    <Image source={{uri: items.logo}} style={styles.logo}></Image>
                                    <View style={styles.topRight}>
                                        <View style={styles.detail}>
                                        <Text style={styles.faculty}>{items.faculty}</Text>
                                        <Text style={styles.department}>{items.department}</Text>
                                        <Text style={styles.university}>{items.university}</Text>
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
                                                <View style={{flexDirection: 'row'}}>
                                                    {items.round.includes("1") == true ? (<RoundItem roundActive={styles.roundActive} data={1}/>) : (<RoundItem roundActive={styles.roundInActive} data={1}/>)}
                                                    {items.round.includes("2") == true ? (<RoundItem roundActive={styles.roundActive} data={2}/>) : (<RoundItem roundActive={styles.roundInActive} data={2}/>)}
                                                    {items.round.includes("3") == true ? (<RoundItem roundActive={styles.roundActive} data={3}/>) : (<RoundItem roundActive={styles.roundInActive} data={3}/>)}
                                                    {items.round.includes("4") == true ? (<RoundItem roundActive={styles.roundActive} data={4}/>) : (<RoundItem roundActive={styles.roundInActive} data={4}/>)}
                                                </View>
                                            }
                                        </View>
                                        <MinScore score={items.min_score}/>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

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
})