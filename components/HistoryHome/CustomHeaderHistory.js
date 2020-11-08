import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight, Alert, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const thongKe = {
    name : '',
    dateChangeTo : 'Ngày',
    dateChangeEnd : 'Ngày'
}

const CustomHeaderHistory = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [state, setState] = useState(thongKe);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(currentDate);
        var dd = currentDate.getDate();
        var mm = currentDate.getMonth() + 1;
        var yyyy = currentDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        const dateNew =  dd + "-" + mm + "-" + yyyy;
        setState({dateChangeTo:dateNew.toString()});
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.headerContainer}>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600', marginLeft: 15 }}>Danh mục chi tiêu</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <FontAwesome name="search" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 30, marginTop: 2 }}>
                    <FontAwesome name="th-list" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View>
                                        {show && (
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={date}
                                                mode={mode}
                                                is24Hour={true}
                                                display="default"
                                                onChange={onChange}
                                                
                                            />
                                        )}
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ marginBottom : 20}}>
                                            <Text style={{fontWeight:'bold',fontSize:18}}>Báo Cáo Thống Kê</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.tkText}>
                                                <Text>Từ</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={showDatepicker}
                                                style={styles.showDatepicker}
                                            >
                                                <Text>{state.dateChangeTo}</Text>
                                            </TouchableOpacity>
                                            <View style={styles.tkText}>
                                                <Text>Đến</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={showDatepicker}
                                                style={styles.showDatepicker}
                                            >
                                                <Text>{state.dateChangeEnd}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{marginVertical:10}}>
                                            <Text>Thu : </Text>
                                            <Text>Chi : </Text>
                                            <Text>Cho Vay : </Text>
                                            <Text>Nợ : </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setModalVisible(!modalVisible)}
                                            style={{ width: 60, backgroundColor: '#B3B3B3', borderRadius: 10, padding: 10 ,marginTop:10}}
                                        >
                                            <Text>Đóng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </Modal>

                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        >
                            <FontAwesome name="calendar" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#3284C1',
        paddingVertical: 15,
        marginBottom: 10,
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: "#FBDADA",
        borderRadius: 20,
        alignItems: "center",
        padding: 15
    },
    openButton: {
        borderRadius: 20,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    tkText : {
        justifyContent:'center',
        alignItems:'center',

    },
    showDatepicker : {
        backgroundColor: '#B3B3B3', 
        borderRadius: 10, 
        padding: 10 ,
        marginHorizontal:10
    }
})

export default CustomHeaderHistory;