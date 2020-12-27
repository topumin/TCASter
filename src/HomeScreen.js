import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Modal,} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./StyleSheet";

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