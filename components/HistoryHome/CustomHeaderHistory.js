import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight, Alert, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Canlendars from './Canlendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomHeaderHistory = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
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
                            <View style={styles.centeredViewModal}>
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
                                <View style={{ alignItems: 'center' }}>

                                    <TouchableOpacity
                                        onPress={() => setModalVisible(!modalVisible)}
                                        style={{ width: 60, backgroundColor: 'gray', borderRadius: 10, padding: 10 }}
                                    >
                                        <Text>Dong</Text>
                                    </TouchableOpacity>
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
    centeredViewModal: {
        backgroundColor: '#fff',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
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
    }
})

export default CustomHeaderHistory;